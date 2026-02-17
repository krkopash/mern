import { Request, Response } from "express";
import User from "../models/user";

export const getDashboardStats = async (req: Request,res: Response
) => {
  const totalUsers = await User.countDocuments();
  const adminCount = await User.countDocuments({ role: "admin" });
  const normalUsers = await User.countDocuments({ role: "user" });
  res.json({totalUsers,adminCount, normalUsers});
};




export const getAllUsers = async (  req: Request,res: Response) => {
  const search = req.query.search as string;
  let query: any = {};
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } }
    ];
  }
  const users = await User.find(query).select("-password");
  res.json(users);
};




export const updateUserRole = async ( req: Request,res: Response) => {
  const { id } = req.params;
  const { role } = req.body;
  if (!["user", "admin"].includes(role)) {
    return res.json({ message: "Invalid role" });
  }
  const user = await User.findByIdAndUpdate( id,{role}, {new: true}).select("-password");
  res.json(user);
};





export const deleteUser = async (req: Request,res: Response) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, { isDeleted: true});
  res.json({ message: "User deleted" });
};




export const restoreUser = async (req: Request,res: Response) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, { isDeleted: false});
  res.json({ message: "User restored" });
};
