import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async ( name: string, email: string,password: string) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, );

  return { user, token };
};


// export const getAllUsers = async (
//   page: number,
//   limit: number,
//   search?: string
// ) => {
//   const query: any = { isDeleted: false };

//   if (search) {
//     query.$or = [
//       { name: { $regex: search, $options: "i" } },
//       { email: { $regex: search, $options: "i" } }
//     ];
//   }

//   return await User.find(query)
//     .skip((page - 1) * limit)
//     .limit(limit)
//     .sort({ createdAt: -1 });
// };