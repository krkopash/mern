import { Router } from "express";
import { readStore, writeStore } from "../data.js";
import { requireLogin } from "../auth.js";
const router = Router();

router.get("/", requireLogin, (req, res) => {
  const store = readStore();
  const user = req.cookies.user;
  const role = req.cookies.role;

  const jokesHtml = store.jokes.map(
      j => `
      <li>
        Joke: ${j.title} <small>(By ${j.user})</small>
        ${(role === "admin" || j.user === user) ? `<a href="/delete/${j.id}">❌</a>` : ""}
      </li>

    `
    ).join(""); 

  const activityHtml = (store.activity[user] || []).map(
      a => `<li>${a}</li>`).join("");

  res.send(`<link rel="stylesheet" href="/style.css" />
   
    <h1>Manage Joke</h1><br/>
    <p>Logged in as <b>${user}</b>  (By ${role}) | <a href="/logout">Logout</a></p>
    <form method="POST" action="/add">
    <label>Write New Joke:</label>
      <input name="title" placeholder="Add Something..." required />
      <button>Add</button>
    </form>
    
    <h2>List of all Jokes:</h2>
    <ul>${jokesHtml}</ul>
    <h2>List of all activity:</h2>
    <ul>${activityHtml}</ul>
    
  `);
});


router.post("/add", requireLogin, (req, res) => {
  const store = readStore();
  const user = req.cookies.user;  

  const joke = { id: Date.now(), title: req.body.title, user };

  store.jokes.push(joke);

  if (!store.activity[user]) store.activity[user] = [];
  store.activity[user].push(`✔ You created a joke`);

  writeStore(store);
  res.redirect("/");
});

router.get("/delete/:id", requireLogin, (req, res) => {
  const store = readStore();
  const user = req.cookies.user;
  const role = req.cookies.role;

  const index = store.jokes.findIndex(j => j.id === Number(req.params.id));


  if (index !== -1 && (role === "admin" || store.jokes[index].user === user)) {
  
    store.jokes.splice(index, 1);
    if (!store.activity[user]) 
      store.activity[user] = [];
    
    store.activity[user].push(`❌ You deleted a joke`);
  }

  writeStore(store);
  res.redirect("/");
});

export default router;