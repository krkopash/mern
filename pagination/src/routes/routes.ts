import express from "express";
import { getServices } from "../controllers/controller";
const router = express.Router();
router.get("/", getServices);

import { createService } from "../controllers/controller";
router.post("/", createService);

export default router;