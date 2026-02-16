import User from "../models/model";

export const getAllUsers = async (
  page: number,
  limit: number,
  search?: string,
  role?: string,
  status?: "active" | "deleted",
  startDate?: string,
  endDate?: string,
  sortOrder: "asc" | "desc" = "desc"
) => {
  const query: any = {};

 
  if (!status) {
    query.isDeleted = false;
  }

  
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } }
    ];
  }

  if (role) {
    query.role = role;
  }

  if (status === "active") {
    query.isDeleted = false;
  }

  if (status === "deleted") {
    query.isDeleted = true;
  }


  if (startDate || endDate) {
    query.createdAt = {};

    if (startDate) {
      query.createdAt.$gte = new Date(startDate);
    }

    if (endDate) {
      query.createdAt.$lte = new Date(endDate);
    }
  }

  
  const sortValue = sortOrder === "asc" ? 1 : -1;

  return await User.find(query)
    .sort({ createdAt: sortValue })
    .skip((page - 1) * limit)
    .limit(limit);
};



export const createUser = async (name: string, email: string) => {
  const exists = await User.findOne({ email });

  if (exists) {
    throw new Error("Email already exists");
  }

  const user = await User.create({ name, email });

  

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
    {
      isDeleted: true,
      deletedAt: new Date()
    },
    { new: true }
  );

  
  return user;
};
