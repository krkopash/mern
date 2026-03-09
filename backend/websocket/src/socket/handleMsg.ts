import { AuthSocket } from "../types";
import { Message } from "../models/msg";
import { db } from "../db";
import { isRateLimited } from "./limit";



export async function handleMessage(socket: AuthSocket,data: any,wss: any) {



  const msg = JSON.parse(data.toString());

  if (msg.type === "join-room") {
    socket.room = msg.room;

    socket.send(JSON.stringify({
      type: "joined",
      room: msg.room
    }));

    const history = await Message.find({ room: msg.room })
      .sort({ createdAt: -1 })
      .limit(20)
      .toArray();

    socket.send(JSON.stringify({
      type: "history",
      messages: history
    }));
  }

  if (msg.type === "chat") {

    if (!socket.room || !socket.userId) {
      socket.send(JSON.stringify({
        type: "error",
        message: "Join a room first"
      }));
      return;
    }

    if (isRateLimited(socket.userId)) {
      socket.send(JSON.stringify({
        type: "error",
        message: "Too many messages. Slow down."
      }));
      return;
    }

    const messageData = {
      userId: socket.userId,
      room: socket.room,
      message: msg.message,
      createdAt: new Date()
    };

    await Message.insertOne(messageData);

    wss.clients.forEach((client: AuthSocket) => {
      if (
        client.readyState === 1 &&
        client.room === socket.room
      ) {
        client.send(JSON.stringify({
          type: "chat",
          data: messageData
        }));
      }
    });
  }
}