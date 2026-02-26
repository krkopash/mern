import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  originalName: { type: String, required: true },
  type: { type: String,srequired: true },
  size: { type: Number,required: true },
  url: { type: String, required: true },
  status: {type: String,enum: ["active", "deleted"],default: "active",},

  uploadedAt: { type: Date,default: Date.now }
});

export default mongoose.model("local", fileSchema);