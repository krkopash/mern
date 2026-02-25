import express from "express";
import {createProduct,getProducts,updateProduct,deleteProduct} from "../controllers/controller.js";

import { validate } from "../middlewares/middleware.js";
import { createProductSchema } from "../validations/validation.js";

const router = express.Router();

router.post("/", validate(createProductSchema), createProduct);
router.get("/", getProducts);
router.put("/:id", validate(createProductSchema), updateProduct);
router.delete("/:id", deleteProduct);

export default router;