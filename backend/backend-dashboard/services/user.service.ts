import User from "../models/user.model";
import { AppError } from "../utils/AppError";

export const getAllUsers = async (
  page: number,
  limit: number,
  search?: string
) => {
  const query: any = { isDeleted: false };

  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  return await User.find(query)
    .skip((page - 1) * limit)
    .limit(limit);
};

export const createUser = async (name: string, email: string) => {
  const exists = await User.findOne({ email });
  if (exists) {
    throw new AppError("Email already exists", 409);
  }
  return await User.create({ name, email });
};

export const getUserById = async (id: string) => {
  const user = await User.findById(id);
  if (!user || user.isDeleted) {
    throw new AppError("User not found", 404);
  }
  return user;
};

export const updateUser = async (
  id: string,
  name: string,
  email: string
) => {
  return await User.findByIdAndUpdate(
    id,
    { name, email },
    { new: true }
  );
};

export const deleteUser = async (id: string) => {
  return await User.findByIdAndUpdate(id, { isDeleted: true });
};
