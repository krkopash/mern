import mongoose, { Schema, Document } from "mongoose";

export interface IService extends Document {
  title: string;
  description: string;
  createdAt: Date;
  category: string;
}

const ServiceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }
  }, { timestamps: true }
);

export default mongoose.model<IService>("Service", ServiceSchema);