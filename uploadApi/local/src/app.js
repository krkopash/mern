import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import fs from "fs";

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}
dotenv.config();
const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/", router);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));