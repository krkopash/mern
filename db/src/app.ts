import express from "express";
import Todo from "./models/models";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", async (_req, res) => {
  const todos = await Todo.find();
  res.render("index", { todos });
});
app.post("/add", async (req, res) => {
  await Todo.create({ text: req.body.text });
  console.log('task added');
  res.redirect("/");
});

app.post("/delete/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  console.log('task deleted');
  res.redirect("/");
});


export default app; 
