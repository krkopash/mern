import express from "express";
import { protect } from "../middlewares/auth";
import * as serviceController from "../controllers/service";

const router = express.Router();

router.post("/", protect, serviceController.createRequest);
router.post("/:id/accept", protect, serviceController.acceptRequest);
router.post("/:id/complete", protect, serviceController.completeRequest);

export default router;
