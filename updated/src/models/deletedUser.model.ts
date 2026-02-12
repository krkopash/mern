import mongoose, { Schema } from "mongoose";

const deletedUserSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, 
      ref: "User",
      required: true
    },
    name: String,
    email: String,
    deletedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export const DeletedUser = mongoose.model(
  "DeletedUser",
  deletedUserSchema
);
