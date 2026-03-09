import { MongoClient } from "mongodb";

export const client = new MongoClient("mongodb://127.0.0.1:27017");
export async function connectDB() {
  await client.connect();
  console.log("db connected");
}

export const db = client.db("websocket_chat");