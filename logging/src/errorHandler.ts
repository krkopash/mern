import type { Request,Response } from "express";
import logger from "./logger.js";

const errorHandler=(err:any, req:Request, res:Response)=>{
    logger.error("error", {
        message:err.message,
        stack: err.stack,
        url: err.originalUrl,
        method: req.method
    });
    res.json({})
}

export default errorHandler;