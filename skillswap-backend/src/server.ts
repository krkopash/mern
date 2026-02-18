import testRoutes from "./routes/test";
import walletRoutes from "./routes/wallet";

import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth";

dotenv.config();
connectDB();

const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Backend Running");
});
app.use("/api/test", testRoutes);
app.use("/api/wallet", walletRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});