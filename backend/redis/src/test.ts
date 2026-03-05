import express, { Request, Response } from "express";
import session from "express-session";
import { RedisStore } from "connect-redis";
import { createClient } from "redis";
import { NextFunction } from "express-serve-static-core";
import users from "./users.json"
const app = express();
const PORT = 5000;
app.use(express.json());
type User={
  id: number,
  username: string, 
  password: string
}

const userList:User[]=users;
const attempt=5;
const blocktime=300;

app.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const key = `login_attempts:${username}`;
  const attempts = await redisClient.get(key);
  if (attempts && Number(attempts) >= attempt) {
    return res.json({
      message: "Too many failed attempts. Try again later."
    });
  }
  const user = userList.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    const newAttempts = await redisClient.incr(key);
    if (newAttempts === 1) {
      await redisClient.expire(key, blocktime);
    }
    return res.json({ message: "Invalid username or password"});
  }
  await redisClient.del(key);
  req.session.regenerate((err) => {
    if (err) {
      return res.json({ message: "Session error" });
    }
    req.session.user = {
      id: user.id,
      username: user.username,
    };
    res.json({ message: "Login successful" });
  });
});


declare module "express-session" {
  interface SessionData { user?: {
      id: number;
      username: string;
    };
  }
}
const redisClient = createClient({  url: "redis://localhost:6379",});
redisClient.on("error", (err) => console.log("Redis Client Error", err));
(async () => {
  await redisClient.connect();
  console.log("Connected to Redis");
})();
const redisStore= new RedisStore({
  client: redisClient,
  prefix: "session:"
})

app.use(
  session({
    store: redisStore,
    secret: "super-secret-key",   resave: false,saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 10, },
  })
)


app.get("/user/:id", async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const cacheKey = `user:${id}`;
  const cachedUser = await redisClient.get(cacheKey);
  if (cachedUser) {
    console.log(" Serving from Redis Cache");
    return res.json(JSON.parse(cachedUser));
  }
  console.log(" Fetching from users.json");
  const user = userList.find((u) => u.id === Number(id));
  if (!user) {
    return res.json({ message: "User not found" });
  }
  await redisClient.set(cacheKey, JSON.stringify(user), {
    EX: 60,
  });
  res.json(user);
});



app.delete("/user/:id/cache", async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const cacheKey = `user:${id}`;
  await redisClient.del(cacheKey);
  res.json({ message: `Cache cleared for user ${id}` });
});



app.delete("/cache/users", async (_req: Request, res: Response) => {
  const keys = await redisClient.keys("user:*");
  if (keys.length > 0) {
    await redisClient.del(keys);
  }
  res.json({ message: "All user cache cleared" });
});

app.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = userList.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.json({ message: "enter valid user info" });
  }

  // create a new session instead of reusing the old one
  req.session.regenerate((err) => {
    if (err) {
      return res.json({ message: "Session error" });
    }

    req.session.user = {
      id: user.id,
      username: user.username,
    };

    res.json({ message: "Login successful" });
  });
});

// app.post("/login", (req: Request, res: Response) => {
//   const { username, password } = req.body;
//   const user = userList.find(
//     (u) => u.username === username && u.password === password
//   );
//   if (!user) {
//     return res.json({ message: "enter valid user info" });
//   }
//   req.session.user = {
//     id: user.id,
//     username: user.username,
//   };
//   res.json({ message: "Login successful" });
// });


const isAuthenticated = (req: Request, res:Response, next:NextFunction)=>{
  if (!req.session.user) {
    return res.json({ message: "Unauthorized" });
  }
  next();
};


app.get("/profile", isAuthenticated, (req: Request, res: Response) => {
  res.json({message: "login profile session",  user: req.session.user});
});


app.post("/logout", (req: Request, res: Response) => {
  req.session.destroy(() => {
    res.json({ message: "user logout" });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});