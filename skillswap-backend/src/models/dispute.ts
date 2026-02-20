import mongoose, { Document, Schema } from "mongoose";

export interface IDispute extends Document {
  serviceRequest: mongoose.Types.ObjectId;
  openedBy: mongoose.Types.ObjectId;
  reason: string;
  status: "OPEN" | "RESOLVED";
  resolution?: "RELEASE" | "REFUND";
  resolvedBy?: mongoose.Types.ObjectId;
}

const disputeSchema = new Schema<IDispute>(
  {
    serviceRequest: {
      type: Schema.Types.ObjectId,
      ref: "ServiceRequest",
      required: true,
    },
    openedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    
    reason: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["OPEN", "RESOLVED"],
      default: "OPEN",
    },
    resolution: {
      type: String,
      enum: ["RELEASE", "REFUND"],
    },
    resolvedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model<IDispute>("Dispute", disputeSchema);
