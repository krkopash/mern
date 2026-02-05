import { Request, Response } from "express";
import * as jokeService from "../services/services";
// import type { RequestHandler } from "express";

export const getJokes = (
_req: Request, res: Response) => {
  res.json(jokeService.getJoke());
};

export const createJoke = (req: Request, res: Response) => {
  const { title, user } = req.body;
  const joke = jokeService.addJoke(title, user);
  res.json(joke);
};
