import { Request, Response } from 'express';
import { fetchUsers } from '../services/service';

export const getUsers = (req: Request, res: Response) => {
  const users = fetchUsers();
  res.json(users);
};
