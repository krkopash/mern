import { Request, Response, NextFunction } from "express";
import winstonLog from "./winston";

const errorHandler = (err: any, req: Request,res: Response,next: NextFunction)=> {
  winstonLog.error("error", { message: err.message,
    url: req.originalUrl,
    method: req.method
  });
  res.status(404).json({ success: false,message: "Internal Server Error"});
};

export default errorHandler;