import { Router } from "express";
import { readStore, writeStore } from "../data.js";
import { requireLogin } from "../auth.js";

const router = Router();

router.get("/", requireLogin, (req, res) => {
  const store = readStore();
  const user = req.cookies.user;
  const role = req.cookies.role;

  const jokesHtml = store.jokes
    .map(
      j => `
      <li>
        ${j.title} <small>(${j.user})</small>
        ${(role === "admin" || j.user === user) ? `<a href="/delete/${j.id}">🗑️</a>` : ""}
      </li>
    `
    )
    .join("");

  const activityHtml = (store.activity[user] || [])
    .slice(-5)
    .map(a => `<li>${a}</li>`)
    .join("");

  res.send(`
    <link rel="stylesheet" href="/style.css" />
    <h1>Jokes App</h1>
    <p>Logged in as <b>${user}</b> (${role}) | <a href="/logout">Logout</a></p>

    <form method="POST" action="/add">
      <input name="title" placeholder="New joke" required />
      <button>Add</button>
    </form>

    <h2>Jokes</h2>
    <ul>${jokesHtml}</ul>

    <h2>Your Activity</h2>
    <ul>${activityHtml}</ul>
  `);
});


router.post("/add", requireLogin, (req, res) => {
  const store = readStore();
  const user = req.cookies.user;

  const joke = { id: Date.now(), title: req.body.title, user };
  store.jokes.push(joke);

  if (!store.activity[user]) store.activity[user] = [];
  store.activity[user].push(`🆕 You created a joke`);

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

    if (!store.activity[user]) store.activity[user] = [];
    store.activity[user].push(`🗑️ You deleted a joke`);
  }

  writeStore(store);
  res.redirect("/");
});

export default router;