import { Request, Response } from "express";
import Service from "../models/model";
import { paginate } from "../page";



export const createService = async (req: Request, res: Response) => {
  try {
    const { title, description, category } = req.body;
    if (!title || !description||!category) {
      return res.json({ success: false, message: "write all data",});
    }
    const service = await Service.create({title, description, category,});
    return res.json({ success: true, data: service,});
  } catch (error) {
    return res.json({ success: false,
      message: "Failed to create service",
    });
  }
};




export const getServices = async (req: Request, res: Response) => {
  const { page, limit, search, category, sortBy, order } = req.query;
  const filter: any = {};
  try {
    const { page, limit, search, category } = req.query;
    const filter: any = {};

    if (search && typeof search === "string") {
      filter.title = { $regex: search, $options: "i" };
    }
    if (category && typeof category === "string") {
      filter.category = category;
    }
  const result = await paginate(Service, filter, {  
  page: page as string,
  limit: limit as string,
  sortBy: sortBy as string,
  order: order as string,
});
    return res.json(result);
  } catch (error) {
    return res.json({success: false, message: "Failed to fetch services", });
  }
};



