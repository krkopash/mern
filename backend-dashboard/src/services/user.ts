
import User from "../models/model";
import { error } from "node:console";
// import userdetail from "../models/userdetail";


export const getAllUsers = async (
  page: number,
  limit: number,
  search?: string) => {
  const query: any = { isDeleted: false };
  if (search) {
    query.name = { $regex: search, $options: "i" };
  }
  return await User.find(query).skip((page - 1) * limit);
};

export const createUser = async (name: string, email: string) => {  
  const exists = await User.findOne({ email }); 
  if (exists) {
    throw new Error("Email already exists(do not use same email)");
  }

  const user=await User.create({name, email});




  return user;
};

export const getUserById = async (id: string) => {
  const user = await User.findById(id);
  if (!user || user.isDeleted) {
    throw new Error("User not found");
  }
  return user;
};

export const updateUser = async ( id: string,name: string,email: string)=> {   
  return await User.findByIdAndUpdate(
    id,
    { name, email },
    { new: true }
  );    
};

export const deleteUser = async (id: string) => {
  const user= await User.findByIdAndUpdate(id, { isDeleted: true }, {new:true});
  return user;
};