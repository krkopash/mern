import express from "express";
import { authenticate } from "../middleware/auth";
import { authorize } from "../middleware/role";
import { getDashboardStats,getAllUsers,updateUserRole,deleteUser,restoreUser} from "../controllers/admin";

const router = express.Router();

router.use(authenticate, authorize("admin"));

router.get("/stats", getDashboardStats);
router.get("/users", getAllUsers);
router.put("/users/:id/role", updateUserRole);
router.put("/users/:id/delete", deleteUser);
router.put("/users/:id/restore", restoreUser);

export default router;
