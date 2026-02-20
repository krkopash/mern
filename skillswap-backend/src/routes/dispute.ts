import express from "express";
import { protect, authorize } from "../middlewares/auth";
import * as disputeController from "../controllers/dispute";
const router = express.Router();

router.post("/:serviceId", protect, disputeController.openDispute);
router.post("/:disputeId/resolve", protect,authorize("ADMIN"),disputeController.resolveDispute);

export default router;