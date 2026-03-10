import { Request, Response } from "express";

import * as authServices from "../services/services";

export const register=async (req:Request, res:Response)=>{
    try{
        const {name, email,password}= req.body;
        const user= await authServices.registerUser(name, email, password);
        res.json(user);

    }
    catch(error){
        res.json({message: error});
    }
};

export const login=async (req:Request, res:Response)=>{
    try{
        const {email, password}=req.body;
        const token= await authServices.loginUser(email, password);
        res.json(token);


    }
    catch(error){
        res.json({message: error});
    }
}