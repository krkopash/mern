import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());


app.post("/login", (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.json({message:"enter username first"});
  }

  const token = jwt.sign( { id: username },"supersecret"  );
  res.json({ token: token });
});

export function startApiServer() {
  app.listen(4000, () => {
    console.log("server start");
  });
}