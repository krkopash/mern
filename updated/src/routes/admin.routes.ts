import { Router } from "express";
import { renderDashboard } from "../controllers/admin.controller";

const router = Router();

router.get("/admin/dashboard", renderDashboard);

export default router;
