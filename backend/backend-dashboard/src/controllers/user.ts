// import { Request, Response } from "express";
// import * as userService from "../services/user";
// import User from "../models/model";

// export const listUsers = async (req: Request,res: Response) => {
//   const page = Number(req.query.page) || 1;
//   const limit = 5;
//   const search = req.query.search as string | undefined;

//   const users = await userService.getAllUsers(page,limit,search);

//   res.render("users", { users, search});
// };
// export const showAddForm = (req:Request, res:Response) => {
//   res.render("add-user");
// };
// export const addUser = async (req:Request, res:Response) => {
//   const { name, email } = req.body;
//   await userService.createUser(name, email);
//   res.redirect("/users");
// };

// export const showEditForm = async (req:Request, res:Response) => {
//   const id = req.params.id as string;
//   const user = await userService.getUserById(id);
//   res.render("edit-user", { user });
// };
// export const updateUser = async (req:Request, res:Response) => {
//   const id = req.params.id as string;
//   const { name, email } = req.body;


//   await userService.updateUser(id, name, email);
//   res.redirect("/users");
// };


// export const deleteUser = async (req:Request, res:Response) => {
//   const id = req.params.id as string;
//   await userService.deleteUser(id);
  
//   res.redirect("/users");
// };

// export const listUsersApi = async (req:Request, res:Response) => {
//   const page = Number(req.query.page) || 1;
//   const search = req.query.search as string;
  
//   const users = await userService.getAllUsers(page, 10, search);
//   res.json(users);
// };


// // export const permanentDeleteUser = async (req: Request,res: Response) => {
// //   const id = req.params.id as string;
// //   const user = await User.findById(id);

// //   if (!user) {
// //     return res.status(404).json({
// //       message: "User not found"
// //     });
// //   }
// //   await User.findByIdAndDelete(user._id);
// //   res.send('deleted');
// // };



// import { Request, Response } from "express";
// import * as userService from "../services/user.service";

// export const listUsers = (async (req:Request, res:Response) => {
//   const page = Number(req.query.page) || 1;
//   const search = req.query.search as string;
//   const users = await userService.getAllUsers(page, 5, search);
//   res.render("users", { users });
// });

// export const showAddForm = (req:Request, res:Response) => {
//   res.render("add-user");
// };

// export const addUser = (async (req:Request, res:Response) => {
//   const { name, email } = req.body;
//   await userService.createUser(name);
//   res.redirect("/users");
// });

// export const showEditForm = (async (req:Request, res:Response) => {
//   const id = req.params.id as string;
//   const user = await userService.getUserById(id);
//   res.render("edit-user", { user });
// });

// export const updateUser = (async (req:Request, res:Response) => {
//   const id = req.params.id as string;
//   const { name, email } = req.body;
//   await userService.updateUser(id, name, email);
//   res.redirect("/users");
// });

// export const deleteUser = (async (req:Request, res:Response) => {
//   const id = req.params.id as string;
//   await userService.deleteUser(id);
//   res.redirect("/users");
// });

// export const listUsersApi = (async (req:Request, res:Response) => {
//   const page = Number(req.query.page) || 1;
//   const search = req.query.search as string;
//   const users = await userService.getAllUsers(page, 10, search);
//   res.json(users);
// });


// export const permanentDeleteUser = async (req:Request, res:Response) => {
//   const user = await User.findById(req.params.id);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   
//   await DeletedUser.create({
//     userId: user._id,
//     name: user.name,
//     email: user.email
//   });

// 
//   await User.findByIdAndDelete(user._id);

//   res.json({ message: "User permanently deleted" });
// };

import { Request, Response } from "express";

import * as userService from "../services/user";
import User from "../models/model";

export const listUsers = async (req: Request,res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = 5;

  const search = req.query.search as string | undefined;
  const role = req.query.role as string | undefined;
  const status = req.query.status as "active" | "deleted" | undefined;
  const startDate = req.query.startDate as string | undefined;
  const endDate = req.query.endDate as string | undefined;
  const sort =
    (req.query.sort as "asc" | "desc") || "desc";

  const users = await userService.getAllUsers(
    page,
    limit,
    search,
    role,
    status,
    startDate,
    endDate,
    sort
  );

  res.render("users", {
    users,
    search,
    role,
    status,
    startDate,
    endDate,
    sort
  });
};

export const showAddForm = (
  req: Request,
  res: Response
) => {
  res.render("add-user");
};

export const addUser = async (
  req: Request,
  res: Response
) => {
  const { name, email } = req.body;

  await userService.createUser(name, email);

  res.redirect("/users");
};



export const showEditForm = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id as string;

  const user = await userService.getUserById(id);

  res.render("edit-user", { user });
};

export const updateUser = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id as string;
  const { name, email } = req.body;

  await userService.updateUser(id, name, email);

  res.redirect("/users");
};



export const deleteUser = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id as string;

  await userService.deleteUser(id);

  res.redirect("/users");
};


export const listUsersApi = async (
  req: Request,
  res: Response
) => {
  const page = Number(req.query.page) || 1;
  const limit = 10;

  const search = req.query.search as string | undefined;
  const role = req.query.role as string | undefined;
  const status = req.query.status as "active" | "deleted" | undefined;
  const startDate = req.query.startDate as string | undefined;
  const endDate = req.query.endDate as string | undefined;
  const sort =
    (req.query.sort as "asc" | "desc") || "desc";

  const users = await userService.getAllUsers(
    page,
    limit,
    search,
    role,
    status,
    startDate,
    endDate,
    sort
  );

  res.json(users);
};



export const permanentDeleteUser = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id as string;
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  await User.findByIdAndDelete(user._id);

  res.json({
    message: "User permanently deleted"
  });
};
