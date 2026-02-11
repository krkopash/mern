import User from "../models/user.model";

export const getDashboardStats = async () => {
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
    // .limit(5);


  return {totalUsers,activeUsers,deletedUsers,recentUsers,latestUsers};  
};
