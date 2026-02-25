import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/routes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () => {   
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));