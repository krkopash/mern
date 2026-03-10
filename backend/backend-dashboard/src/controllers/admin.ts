
import * as adminService from "../services/admin";
import { Request, Response } from "express";

export const renderDashboard = async (req:Request, res: Response)=>{

  const page=Number(req.query.page)||1;
  const search=(req.query.search as string) ||"";
  const selectedDate = req.query.date as string | undefined;


  const getDashboardStats=await adminService.getDashboardStats(page, 5, search, selectedDate);
  res.render("Dashboard", {getDashboardStats, selectedDate});
}

