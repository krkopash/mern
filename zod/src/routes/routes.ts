import { Router } from "express";
import { createUser } from "../controllers/controller";
import validate from "../middleware/middleware";
import { userSchema } from "../schemas/schema";

const router = Router();
router.post("/", validate(userSchema), createUser);

import {  loginUser } from "../controllers/controller";
router.post("/login", loginUser);
export default router;