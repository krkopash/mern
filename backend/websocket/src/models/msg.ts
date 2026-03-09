import { ObjectId } from "mongodb";
import { db } from "../db";


export interface Message {
  _id?: ObjectId;
  userId: string;
  room: string;
  message: string;
  createdAt: Date;
}


export const MessageCollection = db.collection<Message>("messages");