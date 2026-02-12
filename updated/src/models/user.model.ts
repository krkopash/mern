import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default model("User", userSchema);
