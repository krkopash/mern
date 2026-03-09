import { Router, Request, Response } from "express";
import winstonLog from "./winston";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  winstonLog.info("api call");
  res.json({ message: "api call"});
});

router.get("/error", (req: Request, res: Response) => {
  winstonLog.warn("error");
  throw new Error("error");
});

export default router;