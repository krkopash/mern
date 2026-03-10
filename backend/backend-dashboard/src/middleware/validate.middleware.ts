
import { body, validationResult } from "express-validator";
import { Request,Response, NextFunction } from "express";

export const userValidationRules = [
  body("name").notEmpty().withMessage("Name required"),
  body("email").isEmail().withMessage("Valid email required")
];

export const validate = (req:Request, res:Response, next:NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(errors);
  }
  next();
};
