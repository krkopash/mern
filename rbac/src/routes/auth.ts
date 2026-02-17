import express from "express";
import { register, login } from "../controllers/auth";
import { authenticate } from "../middleware/auth";
import { authorize } from "../middleware/role";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/profile", authenticate, (req, res) => {
  res.json({ message: "Profile accessed" });
});

router.get("/admin",authenticate, authorize("admin"),
  (req, res) => {
    res.json({ message: "Admin only content" });
  }
);

export default router;
