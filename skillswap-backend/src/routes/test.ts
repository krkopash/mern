import express from "express";
import { protect, authorize } from "../middlewares/auth";

const router = express.Router();

router.get("/user", protect, authorize("USER"), (req, res) => {
    res.json({ message: "Welcome USER" });
  }
);

router.get("/admin",protect,authorize("ADMIN"),(req, res) => {
    res.json({ message: "Welcome ADMIN" });
  }
);

export default router;