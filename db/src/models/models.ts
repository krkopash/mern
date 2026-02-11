import { Schema, model } from "mongoose";

const todoSchema = new Schema({

  text: String,
});

export default model("New", todoSchema);