import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

const SECRET = "supersecret";

app.post("/login", (req, res) => {

  const { username } = req.body;

  if (!username) {
    return res.status(400).json({
      error: "username required"
    });
  }

  const token = jwt.sign(
    { id: username },
    SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });

});

export function startApiServer() {

  app.listen(4000, () => {
    console.log("API running on http://localhost:4000");
  });

}