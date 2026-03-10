import { Server, Socket } from "socket.io";
import Message from "../models/message.model";

const onlineUsers = new Map<string, string>();

export default function registerChatSocket(io: Server) {

  io.on("connection", (socket: Socket) => {

    console.log("Connected:", socket.id);

    socket.on("join-room", async ({ username, room }) => {

      socket.join(room);

      onlineUsers.set(socket.id, username);

      io.to(room).emit(
        "online-users",
        Array.from(onlineUsers.values())
      );

      const messages = await Message
        .find({ room })
        .sort({ createdAt: 1 });

      socket.emit("old-messages", messages);
    });
    socket.on("send-message", async (data) => {

      const msg = await Message.create({
        username: data.username,
        room: data.room,
        message: data.message,
        status: "sent"
      });

      io.to(data.room).emit("message", msg);

      await Message.findByIdAndUpdate(
        msg._id,
        { status: "delivered" }
      );

      io.to(data.room).emit("message-delivered", {
        messageId: msg._id
      });
    });

    socket.on("seen-message", async ({ messageId, room }) => {

      await Message.findByIdAndUpdate(
        messageId,
        { status: "seen" }
      );

      io.to(room).emit("message-seen", {
        messageId
      });
    });

    
    socket.on("disconnect", () => {

      onlineUsers.delete(socket.id);

      io.emit(
        "online-users",
        Array.from(onlineUsers.values())
      );

      console.log("Disconnected");
    });

  });
}