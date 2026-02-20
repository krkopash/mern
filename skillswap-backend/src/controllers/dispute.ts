import { Request, Response } from "express";
import Dispute from "../models/dispute";
import ServiceRequest from "../models/serviceRequest";
import { transferCredits } from "../services/wallet";

export const openDispute = async (req: any, res: Response) => {
  try {
    const { reason } = req.body;

    const service = await ServiceRequest.findById(req.params.serviceId);
    if (!service) throw new Error("Service not found");

    if (service.status !== "ACCEPTED")
      throw new Error("Dispute can only be opened on accepted services");

    service.status = "DISPUTED";
    await service.save();

    const dispute = await Dispute.create({
      serviceRequest: service._id,
      openedBy: req.user.id,
      reason,
      status: "OPEN",
    });

    res.json({ message: "Dispute opened", dispute });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const resolveDispute = async (req: any, res: Response) => {
  try {
    const { decision } = req.body; 

    const dispute = await Dispute.findById(req.params.disputeId);
    if (!dispute) throw new Error("Dispute not found");

    if (dispute.status === "RESOLVED")
      throw new Error("Already resolved");

    const service = await ServiceRequest.findById(
      dispute.serviceRequest
    );

    if (!service) throw new Error("Service not found");

    if (!service.escrowHeld)
      throw new Error("No escrow funds available");

    const systemUserId = process.env.SYSTEM_USER_ID as string;

    if (decision === "RELEASE") {
      await transferCredits(
        systemUserId,
        service.provider!.toString(),
        service.totalCredits,
        "RELEASE"
      );

      service.status = "COMPLETED";
    }

    if (decision === "REFUND") {
      await transferCredits(
        systemUserId,
        service.requester.toString(),
        service.totalCredits,
        "REFUND"
      );

      service.status = "CANCELLED";
    }

    service.escrowHeld = false;

    dispute.status = "RESOLVED";
    dispute.resolution = decision;
    dispute.resolvedBy = req.user.id;

    await dispute.save();
    await service.save();

    res.json({ message: "Dispute resolved successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};