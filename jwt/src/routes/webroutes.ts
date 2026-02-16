import express from "express";
import * as authService from "../services/service";
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
    res.render("success", { message: "Registration Successful!" }); 
  } catch (error: any) {
    res.send(error.message);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await authService.loginUser(email, password);
    res.render("success", {message: "Token: " + token});
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
  