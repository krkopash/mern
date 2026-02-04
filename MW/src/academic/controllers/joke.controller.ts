import { Request, Response } from "express";
import * as jokeService from "../services/joke.service.js";

export const getJokes = (_req: Request, res: Response) => {
  res.json(jokeService.getAllJokes());
};

export const createJoke = (req: Request, res: Response) => {
  const { title, user } = req.body;
  const joke = jokeService.addJoke(title, user);
  res.status(201).json(joke);
};
