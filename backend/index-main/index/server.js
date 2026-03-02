const express = require("express");
const connectDB = require("./db");
const User = require("./model");
const app = express();

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("server starts");
});

app.get("/add", async (req, res) => {
  try {
    const users = [];
    const total=1000;
    for (let i = 0; i < total; i++) {
      users.push({
        name: "User" + i, email: `user${i}@mail.com`,
        age: Math.floor(Math.random() * 100), });
    }
    await User.insertMany(users);
    res.json({message:`${total} user inserted`})
  } catch (error) {
    console.error(error);
    res.json({message: "try again"});
  }
});

app.get("/search", async (req, res) => {
  try {
    console.time("QueryTime");
    const {email}=req.body;
    if(!email){
      return res.json({message: "mail not exist"});
    }
    const user= await User.findOne({email});
    console.timeEnd("QueryTime");
    res.json(user);
  } catch (error) {
    console.error(error);
    res.send("Search failed");
  }
});

app.get("/search/text", async (req, res) => {
  try {
    const { q } = req.query;   
    if (!q) {
      return res.json({message: "Search keyword required"});
    }
    console.time("QueryTime");
    const users = await User.find({ $text: { $search: q }});
    console.timeEnd("QueryTime");
    res.json(users);
  } catch (error) {
    console.error(error);
    res.send("Search failed");
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server starts ${PORT}`);
});