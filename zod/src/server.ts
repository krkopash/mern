import connectDB from "./config/db";
import express from "express";
import userRoutes from "./routes/routes";
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("API is running");
});
const PORT = 5000;

connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});