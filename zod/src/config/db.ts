import mongoose, { mongo } from "mongoose";
const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/zodBackend");
    await mongoose.connect("mongodb+srv://krishna:krishna2121@cluster0.xsxwwrj.mongodb.net/?appName=Cluster0");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("error");
  }
};

export default connectDB;