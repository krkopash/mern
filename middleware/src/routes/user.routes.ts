import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";
import { apiKeyMiddleware } from "../middlewares/apiKey.middleware.js";

const router = Router();
router.get("/", apiKeyMiddleware, getUsers);

export default router;
