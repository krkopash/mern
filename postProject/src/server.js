import { configDotenv } from "dotenv";
import express from "express";
// import "./controller/unlockPost.js"

import dotenv from "dotenv"
dotenv.config();
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/post.js";

const app=express();
connectDB();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

const PORT =process.env.PORT||5000;
app.listen(PORT, ()=>{
    console.log("server starts", PORT);
});

