import { Request, Response } from "express";
import ServiceRequest from "../models/serviceRequest";
import { transferCredits } from "../services/wallet";


export const createRequest = async (req: any, res: Response) => {
  try {
    const { hours } = req.body;
    if (!hours || hours <= 0) {
      throw new Error("Invalid hours");
    }
    const request = await ServiceRequest.create({requester: req.user.id,hours,totalCredits: hours, status: "OPEN", escrowHeld: false,
    });

    res.json(request);
  } catch (error: any) {
    res.json({ message: error.message });
  }
};

export const acceptRequest = async (req: any, res: Response) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);
    if (!request) throw new Error("Request not found");
    if (request.status !== "OPEN")
      throw new Error("Request not available");
    await transferCredits( request.requester.toString(),req.user.id,request.totalCredits, "CREDIT");

    request.provider = req.user.id;
    request.status = "ACCEPTED";
    request.escrowHeld = true;

    await request.save();

    res.json({ message: "Request accepted & credits held in escrow" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const completeRequest = async (req: any, res: Response) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);
    if (!request) throw new Error("Request not found");
    if (request.status !== "ACCEPTED")
      throw new Error("Invalid state");
    if (!request.escrowHeld)

      throw new Error("No escrow funds found");
    
      request.status = "COMPLETED";
    request.escrowHeld = false;
    await request.save();
    res.json({ message: "Service completed & credits released" });
  } catch (error: any) {
    res.json({ message: error.message });
  }
};