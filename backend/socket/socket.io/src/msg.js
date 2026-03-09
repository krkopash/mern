import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  username: String,
  room: String,
  message: String,
  status: { type: String, default: "sent"},
  time: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Message", messageSchema);