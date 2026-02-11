import { Request, Response } from "express";
import * as userService from "../services/user.service";

export const listUsers = (async (req:Request, res:Response) => {
  const page = Number(req.query.page) || 1;
  const search = req.query.search as string;
  const users = await userService.getAllUsers(page, 5, search);
  res.render("users", { users });
});

export const showAddForm = (req:Request, res:Response) => {
  res.render("add-user");
};

export const addUser = async (req:Request, res:Response) => {
  const { name, email } = req.body;
  await userService.createUser(name, email);
  res.redirect("/users");
};

export const showEditForm = async (req:Request, res:Response) => {
  const id = req.params.id as string;
  const user = await userService.getUserById(id);
  res.render("edit-user", { user });
};

export const updateUser = async (req:Request, res:Response) => {
  const id = req.params.id as string;
  const { name, email } = req.body;
  await userService.updateUser(id, name, email);
  res.redirect("/users");
};

export const deleteUser = async (req:Request, res:Response) => {
  const id = req.params.id as string;
  await userService.deleteUser(id);
  res.redirect("/users");
};

export const listUsersApi = async (req:Request, res:Response) => {
  const page = Number(req.query.page) || 1;
  const search = req.query.search as string;
  const users = await userService.getAllUsers(page, 10, search);
  res.json(users);
};


// export const deletePer = (req: Request, res: Response) => {
//   try {
//     UserService.deleteUser(req.params.id);
//     res.redirect("/");
//   } catch (err: any) {
//     res.status(400).send(err.message);
//   }
// };
