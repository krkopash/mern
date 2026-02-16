import { Request, Response } from "express";
import * as authService from "../services/service";

export const register = async (req: Request, res: Response) => {
  try {
    const {name,email,password } = req.body;
    const user = await authService.registerUser( name,email,password);
    res.json(user);
    
  } catch (error: any) {
    res.json({ message: error.message });
  }
};




export const login = async (req: Request, res: Response) => {
  try {
    const {email,password} = req.body;
    const token = await authService.loginUser( email,password);
    res.json({ token });
  } catch (error: any) {
    res.json({ message: error.message });
  }
};