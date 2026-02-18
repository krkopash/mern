import express from "express";
import { register, login } from "../controllers/auth";
// import * as controller from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// router.get("/api/users", controller.listUsersApi);
export default router;
