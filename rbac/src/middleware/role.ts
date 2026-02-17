import type { Response, NextFunction } from "express";
import type { AuthRequest } from "./auth";

export const authorize = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return res.json({ message: "Login as user" });
    }
    next();
  };
};
