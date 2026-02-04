import { Request, Response, NextFunction } from "express";
import { Router } from "express";
const router=Router();

export const logger = (
  req: Request,
  _res: Response,
  next: NextFunction

) => {
  console.log(
    `
    [${new Date().toLocaleString()}] ${req.method} ${req.originalUrl}
    `
  );
  next();
};

