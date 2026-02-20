import mongoose from "mongoose";
import User from "../models/user";
import Transaction from "../models/transaction";


export const transferCredits = async ( fromUserId: string, toUserId: string, amount: number, type: "CREDIT" | "RELEASE" | "REFUND") => {
  try {
    const fromUser = await User.findById(fromUserId);
    const toUser = await User.findById(toUserId);

    if (!fromUser || !toUser) {
      throw new Error("User not found");
    }

    if ((type === "CREDIT" || type === "RELEASE") && fromUser.credits < amount) {
      throw new Error("Insufficient credits");
    }

    fromUser.credits -= amount;
    toUser.credits += amount;

    await fromUser.save();
    await toUser.save();

    await Transaction.create({fromUser: fromUserId, toUser: toUserId, amount, type, status: "SUCCESS", });

    return { message: "Transaction successful" };
  } catch (error) {
    throw error;
  }
};