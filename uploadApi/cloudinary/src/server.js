require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB Error:", error.message);
  }
};

const authRoutes = require("./routes/auth.routes");
const fileRoutes = require("./routes/file.routes");

connectDB();

const app = express();
// app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);