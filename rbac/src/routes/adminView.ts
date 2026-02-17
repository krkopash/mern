import express from "express";
import User from "../models/user";

const router = express.Router();

router.get("/dashboard", async (req, res) => {
  const totalUsers = await User.countDocuments();
  const adminCount = await User.countDocuments({ role: "admin" });
  const normalUsers = await User.countDocuments({ role: "user" });

  res.render("dashboard", {
    stats: { totalUsers, adminCount, normalUsers }
  });
});

router.get("/users", async (req, res) => {
  const search = req.query.search as string;

  let query: any = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } }
    ];
  }

  const users = await User.find(query);

  res.render("users", { users });
});

export default router;
