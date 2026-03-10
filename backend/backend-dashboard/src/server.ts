import path from "path";
import express from "express";
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


import dotenv from "dotenv";
import authRoutes from "./routes/auth";



dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import webRoutes from "./routes/web";

app.use("/", webRoutes);



app.use(express.json());

app.use("/auth", authRoutes);



app.use(express.urlencoded({ extended: true }));

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
