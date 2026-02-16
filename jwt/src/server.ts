
import connectDB from "./config/db";
import path from "path";
import express from "express";
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


import dotenv from "dotenv";

import authRoutes from "./routes/routes";
app.use("/auth", authRoutes);


dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import webRoutes from "./routes/webroutes";
app.use("/", webRoutes);


app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});