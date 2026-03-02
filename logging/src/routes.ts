import type { Request, Response } from "express";
import express from "express";
import logger from "./logger.js";

import { Router } from "express";
const router=Router();

router.get("/", (req:Request, res:Response)=>{
    logger.info("fetch all info");
    res.json({message: "fetched all info"});
})

router.get("/error", (req:Request, res:Response)=>{
    logger.error("something went wrong");
    res.json({ message: "something went wrong"});
})

export default router;