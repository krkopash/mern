import { Router } from "express";
const router=Router();
import { renderDashboard } from "../controllers/admin";

router.get("/admin/dashboard", renderDashboard);

export default router;
