import { Schema, model } from "mongoose";

const userAuditSchema = new Schema(
  {
    action: {
      type: String,
      enum: ["CREATED", "SOFT_DELETED", "PERMANENTLY_DELETED"],
      required: true
    },
    userEmail: String
  },
  { timestamps: true }
);

export default model("UserAudit", userAuditSchema);
