import mongoose from "mongoose";
export const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://krishna:krishna2121@cluster0.xsxwwrj.mongodb.net/new");
    console.log("db connected");
}