import Joi from "joi";

export const createProductSchema = Joi.object({
  title: Joi.string().min(5).max(25).required(),
  id: Joi.string().pattern(/^[A-Z0-9]{6,12}$/).required(),
  price: Joi.number().min(0).precision(2).required(),
  stock: Joi.number().integer().min(1).required(),
  category: Joi.string().valid("electronics", "fashion", "home", "sports").required(),
  isFeatured: Joi.boolean(),
  dimensions: Joi.object({
    width: Joi.number().positive(),
    height: Joi.number().positive(),
    weight: Joi.number().positive()
  })
});