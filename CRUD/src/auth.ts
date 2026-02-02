import { Request, Response, NextFunction } from "express";

export const requireLogin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies?.user) {
    return res.redirect("/login");

  }
  next();
};
