import User from "../models/user.model";
import UserAudit from "../models/userAudit.model";


export const getAllUsers = async (
  page: number,
  limit: number,
  search?: string
) => {
  const query: any = { isDeleted: false };

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } }
    ];
  }

  return await User.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ createdAt: -1 });
};



export const createUser = async (name: string, email: string) => {
  const exists = await User.findOne({ email });

  if (exists) {
    throw new Error("Email already exists");
  }

  const user = await User.create({ name, email });

  
  await UserAudit.create({
    action: "CREATED",
    userEmail: user.email
  });

  return user;
};



export const getUserById = async (id: string) => {
  const user = await User.findById(id);

  if (!user || user.isDeleted) {
    throw new Error("User not found");
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
  const user = await User.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  if (user) {
    await UserAudit.create({
      action: "SOFT_DELETED",
      userEmail: user.email
    });
  }

  return user;
};
