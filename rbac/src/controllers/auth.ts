import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/user";

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  const exist = await userModel.findOne({ email });
  if (exist) {
    return res.json({ message: "can not use same email id, user already exist!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({ name,email,password: hashedPassword,role});
  res.json({ message: "registration done!", user });
};




export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) return res.json({ message: "user doesn't exist!" });
  
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.json({ message: "incorrect password" });

  const token = jwt.sign( { id: user._id, role: user.role }, process.env.JWT_SECRET as string );
  res.json({ token });
};
