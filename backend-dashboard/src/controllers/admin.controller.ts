
import * as adminService from "../services/admin.service";
import { Request, Response } from "express";

export const renderDashboard = async (req:Request, res: Response)=>{
  const stats=await adminService.getDashboardStats();
  res.render("Dashboard", {stats});
}
