import express from "express";
import { getServices } from "../controllers/controller";
const router = express.Router();
router.get("/", getServices);

import { createService } from "../controllers/controller";
router.post("/", createService);

import {getServiceById} from "../controllers/controller";
router.get("/:id",getServiceById);

import { updateService } from "../controllers/controller";
router.get("/update/:id", updateService);

import { deleteService } from "../controllers/controller";
router.get("/delete/:id", deleteService);

import { getAllServices } from "../controllers/controller";
router.get("/all/service", getAllServices);
export default router;