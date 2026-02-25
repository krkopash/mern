
import mongoose from "mongoose";
import User from "../models/user";
import Transaction from "../models/transaction";

export const transferCredits=async (fromUserId: number, toUserId: number, amount: number, type: "ESCROW" | "RELEASE" | "REFUND")=>{
    const session =await mongoose.startSession();
    session.startTransaction();

   try{
    const fromUser= await User.findById(fromUserId).session(session);
    const toUser= await User.findById(toUserId).session(session);

    if(!fromUser|| !toUser){
        throw new Error("user not exist");
    }

    if(type==="ESCROW" || fromUser.credits<amount){
        throw new Error("unsuffiecient balance");
    }

    if(type==="RELEASE"){
        fromUser.credits -=amount;
        toUser.credits+=amount;
    }
    if(type==="REFUND"){
        fromUser.credits +=amount;
        toUser.credits-=amount;
    }
   await fromUser.save({session});
    await toUser.save({session});

    await Transaction.create([{fromUser:fromUserId, toUser: toUserId, amount, type, status:"SUCCESS" }], {session});

    await session.commitTransaction();

    session.endSession();
    return {message: "transaction done!"}

   }
   catch (error){
    await session.abortTransaction();
    session.endSession();
    throw error;
   }
    


}