import { Request, Response, NextFunction } from "express";
import { activityLog } from "../utils/activity.store.js";

export const activityMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.on("finish", () => {
    activityLog.unshift({
      time: new Date().toLocaleString(),
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode
    });

    
    if (activityLog.length > 20) {
      activityLog.pop();
    }
  });

  next();
};
