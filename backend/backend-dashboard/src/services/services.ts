
import User from "../models/model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (name: string,email: string,password: string) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({name,email,password: hashedPassword});

  return user;
};

export const loginUser = async ( email: string, password: string ) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("user doesn't exist");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("incorrect password");
  }
  const token = jwt.sign({userId: user._id,}, process.env.JWT_SECRET as string );

  return token;
};
