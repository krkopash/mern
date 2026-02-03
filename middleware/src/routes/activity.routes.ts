import { Router } from "express";
import { activityLog } from "../utils/activity.store.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json(activityLog);
});

export default router;
