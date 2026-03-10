import { db } from "../db";
import { ObjectId } from "mongodb";

export interface Message {
  _id?: ObjectId;
  userId: string;
  room: string;
  message: string;
  createdAt: Date;
}

export const MessageCollection = db.collection<Message>("messages");