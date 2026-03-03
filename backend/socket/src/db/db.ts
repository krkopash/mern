import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://krishna:krishna2121@cluster0.xsxwwrj.mongodb.net/socket?appName=Cluster0");
  console.log("MongoDB Connected");
};