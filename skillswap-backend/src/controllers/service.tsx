import ServiceRequest from "../models/service";

import { transferCredits } from "../services/wallet";
import { Request, Response } from "express";

export const createRequest = async(req:Request, res:Response)=>{
    try{
        const { hours}= req.body;
        const request = await ServiceRequest.create({
            requester:req.body.id,
            hours,
        });
        res.status(200).json(request);
    }
    catch(error: any){
        throw new Error(error);
    }
}

export const aaceptRquest= async (req: Request, res: Response)=>{
    try{
        const {hours, status}=req.body;
        const request= await ServiceRequest.findById(req.params.id);
        if(!request){
            throw new Error ("Request not exist");
        }
        const open= await ServiceRequest.findById(req.body);
        if(open){
            
        }
        request.provider=req.user.id;

    }
    catch(error: any){
        throw new Error(error);
    }
}

export const completeRequest =async (req: Request, res: Response)=>{
    try{
        const requestId= await ServiceRequest.findById(req.params.id);
        if(reqquestId.status!== "ACCEPTED"){
            throw new Error ("invalid status");

        }
        req.status=== "COMPLETED";
        await requestId.save();
        

    }
    catch(error: any){
        throw new Error(error);
    }
}