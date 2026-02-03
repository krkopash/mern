import { Router } from "express";

const router = Router();

router.get("/login", (_req, res) => {
  res.send(`
    <link rel="stylesheet" href="/style.css" />
    <h1>Login</h1>

    <form method="POST" action="/login">
      <input name="username" placeholder="Enter username" required />
      <select name="role">
        <option value="admin">Admin</option>
        <option value="qa">QA</option>
      </select>
      <button>Login</button>
    </form>
  `);
});


router.post("/login", (req, res) => {
  const { username, role } = req.body;
  res.cookie("user", username);
  res.cookie("role", role);
  res.redirect("/");
});


router.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.clearCookie("role");
  res.redirect("/login");
});

export default router;
