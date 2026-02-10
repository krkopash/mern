import { Request, Response } from "express";
import { UserService } from "../services/service";

export const renderUsersPage = (req: Request, res: Response) => {
  const users = UserService.getAllUsers();
  res.render("users", { users });
};

export const createUser = (req: Request, res: Response) => {
  try {
    
    const { name, email } = req.body;
    UserService.createUser(name, email);
    res.redirect("/");
  } 
  catch (err: any) {
      res.status(400).send(err.message);
  }};

export const updateUser = (req: Request, res: Response) => {
  try {
    const { id, name, email } = req.body;
    UserService.updateUser(id, name, email);

    res.redirect("/");
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
export const deleteUser = (req: Request, res: Response) => {
  
  try {
  
    UserService.deleteUser(req.params.id);
    res.redirect("/");
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
