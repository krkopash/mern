
import mongoose from "mongoose";

export const db = async()=>{
  await mongoose.connect("mongodb+srv://krishna:krishna2121@cluster0.xsxwwrj.mongodb.net/msgmanage");
  console.log("db connected");
}