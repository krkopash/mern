import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import serviceRoutes from "./routes/routes";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api/services", serviceRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});