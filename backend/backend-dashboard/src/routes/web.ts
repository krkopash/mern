import express from "express";
import * as authService from "../services/services";
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await authService.registerUser(name, email, password);
    res.render("dashboard");
  } catch (error: any) {
    res.send(error.message);
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authService.loginUser(email, password);

    res.render("dashboard");
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
