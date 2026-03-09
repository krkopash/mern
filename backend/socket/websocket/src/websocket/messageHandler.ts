import { AuthSocket } from "../types";
import { MessageCollection } from "../models/message";
import { isRateLimited } from "./rateLimiter";

export async function handleMessage(socket: AuthSocket,data: any,wss: any) {
  const msg = JSON.parse(data.toString());

  if (msg.type === "join-room") {
    socket.room = msg.room;
    socket.send(JSON.stringify({type: "joined", room: msg.room }));
    const history = await MessageCollection.find({ room: msg.room }).sort({ createdAt: -1 });
    socket.send(JSON.stringify({ type: "all msg of this room",messages: history}));
  }

  if (msg.type === "chat") {
    if (!socket.room || !socket.userId) {
      socket.send(JSON.stringify({type: "error",message: "Join a room first"}));
      return;
    }

    if (isRateLimited(socket.userId)) {
      socket.send(JSON.stringify({ type: "error", message: "Too many messages in short time"}));
      return;
    }

    const messageData = {userId: socket.userId, room: socket.room,
      message: msg.message,
      createdAt: new Date()
    };
    await MessageCollection.insertOne(messageData);
    
    wss.clients.forEach((client: AuthSocket) => {
      if ( client.readyState === 1 &&client.room === socket.room) {
        client.send(JSON.stringify({ type: "chat",
          data: messageData
        }));
      }
    });
  }
}