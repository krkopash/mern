import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document { name: string; email: string; password: string; role: "USER" | "ADMIN"; 
  credits: number;trustScore: number;}

const userSchema = new Schema<IUser>(
  {
    name: {type: String, required: true,},
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: { type: String,required: true,},
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    
    credits: {type: Number,default: 5, },
    trustScore: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
