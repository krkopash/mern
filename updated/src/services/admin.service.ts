import User from "../models/user.model";
import UserAudit from "../models/userAudit.model";

export const getDashboardStats = async (
  page = 1,
  limit = 5,
  search = ""
) => {
  const skip = (page - 1) * limit;

  
  const totalUsers = await User.countDocuments();
  const activeUsers = await User.countDocuments({ isDeleted: false });
  const deletedUsers = await User.countDocuments({ isDeleted: true });
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const recentUsers = await User.countDocuments({
    createdAt: { $gte: sevenDaysAgo }
  });

  const latestUsers = await User.find({ isDeleted: false })
    .sort({ createdAt: -1 })
    .limit(5);


  const query: any = { isDeleted: false };

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } }
    ];
  }

  
  const users = await User.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  
  const permanentlyDeletedUsers = await UserAudit.countDocuments({
    action: "PERMANENTLY_DELETED"
  });

  const totalPages = Math.ceil(activeUsers / limit);

return {totalUsers,activeUsers,deletedUsers,recentUsers,latestUsers,permanentlyDeletedUsers, users, totalPages, currentPage: page, search  };
};
