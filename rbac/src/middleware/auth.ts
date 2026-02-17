import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = (req: AuthRequest,res: Response,next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.json({ message: "token not exists!" });

  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch {
    res.json({ message: "Invalid token" });
  }
};
