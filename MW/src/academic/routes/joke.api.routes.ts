import { Router } from "express";
import { getJokes, createJoke } from "../controllers/joke.controller.js";

const router = Router();

router.get("/api/jokes", getJokes);
router.post("/api/jokes", createJoke);

export default router;
