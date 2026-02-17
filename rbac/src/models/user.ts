import mongoose from "mongoose";

export interface IUser extends mongoose.Document { name: string;
  email: string;
  password: string;
  isDeleted: boolean;
  role: "user" | "admin";
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isDeleted: {  type: Boolean,default: false},
  role: { type: String, enum: ["user", "admin"],default: "user" }
});

export default mongoose.model<IUser>("rbac", userSchema);