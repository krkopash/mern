require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const otpRoutes = require("./routes/otp");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Mongo connection error", err));


app.use("/api", otpRoutes);
app.listen(5000,()=>{
  console.log("Server running on 3000");
});