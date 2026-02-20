import { Request, Response } from "express";
import * as authService from "../services/auth";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await authService.registerUser(name, email, password);
    res.json({ message: "User registered successfully", user, });
  } catch (error: any) {
    res.json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await authService.loginUser(email, password);
    res.json({ message: "Login successful", ...data, });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
