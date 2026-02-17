import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

import authRoutes from "./routes/auth";


const app = express();
import adminRoutes from "./routes/admin";

app.use("/api/admin", adminRoutes);

import adminViewRoutes from "./routes/adminView";
app.use("/admin", adminViewRoutes);

dotenv.config();
connectDB();

app.use(express.json());
import path from "path";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/api", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
