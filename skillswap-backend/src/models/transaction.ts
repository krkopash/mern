import mongoose, { Document, Schema } from "mongoose";

export interface ITransaction extends Document {
  fromUser: mongoose.Types.ObjectId;
  toUser: mongoose.Types.ObjectId;
  amount: number;
  type: "ESCROW" | "RELEASE" | "REFUND";
  relatedServiceRequest?: mongoose.Types.ObjectId;
  status: "SUCCESS" | "FAILED";
}

const transactionSchema = new Schema<ITransaction>(
  {
    fromUser: { type: Schema.Types.ObjectId, ref: "User", required: true, },
    toUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: { type: Number,required: true,},
    type: {
      type: String,
      enum: ["ESCROW", "RELEASE", "REFUND"],
      required: true,
    },
    relatedServiceRequest: {
      type: Schema.Types.ObjectId,
      ref: "ServiceRequest",
    },
    status: {
      type: String,
      enum: ["SUCCESS", "FAILED"],
      default: "SUCCESS",
    },
  },
  { timestamps: true }
);

export default mongoose.model<ITransaction>(
  "Transaction",
  transactionSchema
);
