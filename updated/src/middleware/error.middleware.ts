import { Request, Response, NextFunction } from "express";

export const errorHandler = (err:unknown, req:Request, res:Response, next:NextFunction) => {
  if (err) {
    return res.send(err);
  }
  console.error(err);
  res.status(500).send("Internal Server Error");
};
