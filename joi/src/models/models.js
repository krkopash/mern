// import { required } from "joi";
import mongoose from "mongoose";
// import { type } from "node:os";

const productSchema = new mongoose.Schema(
  {
    title: {type: String, required: true, minlength: 5},
    id: {type: String, required: true, unique: true},
    price: {type: Number,required: true },
    stock: {type: Number,required: true},
    category: {type: String,enum: ["electronics", "fashion", "home", "sports"]},
    isFeatured: {type: Boolean,default: false},
    dimensions: {
      width: Number,
      height: Number,
      weight: Number
    }
  },
  { timestamps: true }
);

export default mongoose.model("joi", productSchema);