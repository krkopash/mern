import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  userId: {type: String, required: true },
  room: { type: String, required: true},
  message: { type: String,required: true},
  createdAt: { type: Date,
    default: Date.now
  }
});

export const MessageCollection = mongoose.model("Message", messageSchema);