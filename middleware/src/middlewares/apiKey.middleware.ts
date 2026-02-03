import { Request, Response, NextFunction } from "express";

const API_KEY = "123";

export const apiKeyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey =
    (req.query.apiKey as string) ||
    (req.headers["x-api-key"] as string);

  if (!apiKey) {
    return res.status(401).json({
      message: "API key missing"
    });
  }

  if (apiKey !== API_KEY) {
    return res.status(403).json({
      message: "Invalid API key"
    });
  }

  next();
};
