require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const otpRoutes = require("./routes/otp.routes");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"));

app.use("/api/otp", otpRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server running on port 3000")
);