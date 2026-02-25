import { Document } from "mongoose";

export const userResponseDTO = (user: Document & any) => {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    age: user.age,
   createdAt: user.createdAt? user.createdAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) : null
  };
};