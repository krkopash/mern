const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const app = express();
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/user/:name/:email", async (req, res) => {
  try {
    const { name, email } = req.params;
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error creating user",
      error: err.message
    });
  }
});

app.get("/post/:userId/:title", async (req, res) => {
  const { userId, title } = req.params;

  const post = await Post.create({
    title,
    content: "linked collections",
    userId
  });

  res.json(post);
});

app.get("/posts-raw", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});
app.get("/posts-linked", async (req, res) => {
  const posts = await Post.find().populate("userId");
  res.json(posts);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
