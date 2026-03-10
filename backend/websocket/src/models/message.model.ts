import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  username: string;
  room: string;
  message: string;
  status: "sent" | "delivered" | "seen";
}

const messageSchema = new Schema(
  {
    username: String,
    room: String,
    message: String,
    status: {
      type: String,
      default: "sent"
    }
  },
  { timestamps: true }
);

export default mongoose.model<IMessage>(
  "Message",
  messageSchema
);