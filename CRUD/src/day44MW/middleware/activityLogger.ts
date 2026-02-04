import { Request, Response, NextFunction } from "express";
import { readStore, writeStore } from "../../data.js";

export const activityLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.cookies?.user;

  res.on("finish", () => {
    
  

    const store = readStore();

    if (!store.activity[user]) {
      store.activity[user] = [];
    }

    store.activity[user].push(
      `${req.method} ${req.originalUrl} (${res.statusCode})`
    );

    writeStore(store);
  });

  next();
};
