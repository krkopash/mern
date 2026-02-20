import mongoose, { Document, Schema } from "mongoose";

export interface IServiceRequest extends Document {
  requester: mongoose.Types.ObjectId;
  provider?: mongoose.Types.ObjectId;
  hours: number;
  totalCredits: number;
  status:| "OPEN" | "ACCEPTED"| "IN_PROGRESS"| "COMPLETED"| "DISPUTED"| "CANCELLED";
  escrowHeld: boolean;
}

const serviceRequestSchema = new Schema<IServiceRequest>(
  {
    requester: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    provider: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    hours: {
      type: Number,
      required: true,
    },
    totalCredits: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: [ "OPEN", "ACCEPTED", "IN_PROGRESS", "COMPLETED", "DISPUTED", "CANCELLED", ],
      default: "OPEN",
    },
    escrowHeld: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IServiceRequest>(
  "ServiceRequest",
  serviceRequestSchema
);
