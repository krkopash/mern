import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";

// import { logger } from "./middleware/logger.middleware";


const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(logger);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

import userRoutes from "./routes/user";
app.use(userRoutes);

import adminRoutes from "./routes/admin";
app.use(adminRoutes);

import connectDB from "./config/db";
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
