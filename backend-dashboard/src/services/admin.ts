
import User from "../models/model";

export const getDashboardStats = async (page=1, limit=5, search="",  selectedDate?: string) => {   
  const skip=(page-1)*limit;

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


  const query: any ={isDeleted: false};

    if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } }, 
      { email: { $regex: search, $options: "i" } },

    ];
  }



  const users=await User.find(query).sort({createdAt:-1}).skip(skip).limit(limit);

  

  // const olddoc=await User.countDocuments();
  // const permanentlyDeletedUsers=0;

  
  const totalPage=Math.ceil(activeUsers/limit);




  const today=new Date();
  today.setHours(0,0,0,0);

  const tomorrow=new Date(today);
  tomorrow.setHours(tomorrow.getDate()+1);

  const monthAgo=new Date();
  monthAgo.setMonth(monthAgo.getMonth()-1);



  const todayUser= await User.countDocuments({
    createdAt: {$gt: today, $lt: tomorrow}
  });

  const MonthlyUser=await User.countDocuments({
    createdAt: {$gt: monthAgo}
  });

  const weeklyUser=await User.countDocuments({
    createdAt: {$gte: sevenDaysAgo }
  });

  const preweekStart= new Date();
  preweekStart.setDate(preweekStart.getDate()-14);

  const preweekEnd= new Date();
  preweekEnd.setDate(preweekEnd.getDate()-7);

  const prevweekUser=await User.countDocuments({
    createdAt: {$gt:preweekStart, $lt: preweekEnd}
  })
  const per=((recentUsers)/(totalUsers))*100;
  const growth=prevweekUser===0?100: Math.floor(per) ; 


  const userRatio={
    active: activeUsers,
    inactive:deletedUsers
  };

let usersOnSelectedDate: number | null = null;

  if (selectedDate) {
    const date = new Date(selectedDate);
    date.setHours(0, 0, 0, 0);

    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);

    usersOnSelectedDate = await User.countDocuments({
      createdAt: { $gte: date, $lt: nextDay }
    });
  }


  return {totalUsers,activeUsers,deletedUsers,recentUsers,latestUsers, users, totalPage, currentPage: page, search,userRatio,
    todayUser, MonthlyUser, weeklyUser, prevweekUser, growth, selectedDate, usersOnSelectedDate,
   };  
};
