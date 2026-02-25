import { Request, Response } from "express";
import User from "../models/model";
import { userResponseDTO } from "../dtos/dtos";
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.json({ message: "User created successfully", data: userResponseDTO(user)});
  } catch (error) {
    res.json({ message: "Error creating user" });
  }
};



export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "mail id not exist" });
  }

  if (user.isLocked()) {
    return res.json({message: "Account locked. Try again later."});
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    await user.incrementLoginAttempts();
    return res.json({ message: "enter valid password"});
  }

  user.loginAttempts = 0;
  user.lockUntil = undefined;
  await user.save();
  res.json({ message: "Login successful" });
};