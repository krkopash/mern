import { WebSocketServer } from "ws";
import { AuthSocket } from "../types";
import { verifyToken } from "../auth";
import { handleMessage } from "./messageHandler";

export function startChatServer(port: number) {

  const wss = new WebSocketServer({ port });

  console.log("WebSocket running on", port);

  wss.on("connection", (socket: AuthSocket, req) => {

    const params = new URL(req.url!, "http://localhost").searchParams;
    const token = params.get("token");

    const user = verifyToken(token || "");

    if (!user) {
      socket.close();
      return;
    }

    socket.userId = (user as any).id;
    socket.isAlive = true;

    console.log("User connected:", socket.userId);

    socket.on("message", async (data) => {
      await handleMessage(socket, data, wss);
    });

    socket.on("pong", () => {
      console.log("PONG received from", socket.userId);
      socket.isAlive = true;
    });

  });

  setInterval(() => {

    wss.clients.forEach((socket: AuthSocket) => {

      if (!socket.isAlive) {
        socket.terminate();
        return;
      }

      socket.isAlive = false;
      socket.ping();
      console.log("PING sent");

    });

  }, 30000);

}





// import { WebSocketServer } from "ws";
// import { AuthSocket } from "../types";
// import { verifyToken } from "../auth";
// import { MessageCollection } from "../models/message";
// const rateLimit = new Map<string, { count: number; lastReset: number }>();

// const MESSAGE_LIMIT = 2;
// const WINDOW_TIME = 10000; 
// function isRateLimited(userId: string) {
//   const now = Date.now();
//   const record = rateLimit.get(userId);

//   if (!record) {
//     rateLimit.set(userId, { count: 1, lastReset: now });
//     return false;
//   }

//   if (now - record.lastReset > WINDOW_TIME) {
//     rateLimit.set(userId, { count: 1, lastReset: now });
//     return false;
//   }

//   if (record.count >= MESSAGE_LIMIT) {
//     return true;
//   }
//   record.count += 1;
//   return false;
// }
// export function startChatServer(port: number) {
//   const wss = new WebSocketServer({ port });
//   console.log("WebSocket running on", port);
//   wss.on("connection", async (socket: AuthSocket, req) => {
//     const params = new URL(req.url!, "http://localhost").searchParams;
//     const token = params.get("token");
//     const user = verifyToken(token || "");
//     if (!user) {
//       socket.close();
//       return;
//     }

//     socket.userId = (user as any).id;
//     socket.isAlive = true;

//     console.log("User connected:", socket.userId);

// //     socket.on("message", async (data) => {
// //       const msg = JSON.parse(data.toString());
// //       if (msg.type === "join-room") {
// //         socket.room = msg.room;
// //         socket.send(JSON.stringify({ type: "joined", room: msg.room }));
// //         const history = await MessageCollection.find({ room: msg.room }).sort({ createdAt: -1 }).limit(20).toArray();
// //         socket.send(JSON.stringify({
// //           type: "history",
// //           messages: history
// //         }));
// //       }
// //       if (msg.type === "chat") {
// //         // const messageData = {
// //         //   userId: socket.userId,
// //         //   room: socket.room,
// //         //   message: msg.message,
// //         //   createdAt: new Date()
// //         // };
// //         const messageData = {
// //   userId: socket.userId!,
// //   room: socket.room!,
// //   message: msg.message,
// //   createdAt: new Date()
// // };

// //         await MessageCollection.insertOne(messageData);
// //         wss.clients.forEach((client: AuthSocket) => {
// //           if (
// //             client.readyState === 1 &&
// //             client.room === socket.room
// //           ) {
// //             client.send(JSON.stringify({
// //               type: "chat",
// //               data: messageData
// //             }));
// //           }
// //         });
// //       }
// //     });
// socket.on("message", async (data) => {
//   const msg = JSON.parse(data.toString());
//   if (msg.type === "join-room") {
//     socket.room = msg.room;
//     socket.send(JSON.stringify({
//       type: "joined",
//       room: msg.room
//     }));
//     const history = await MessageCollection
//       .find({ room: msg.room }).sort({ createdAt: -1 }).limit(20).toArray();
//     socket.send(JSON.stringify({
//       type: "history",
//       messages: history
//     }));
//   }
//   if (msg.type === "chat") {
//     if (!socket.room || !socket.userId) {
//       socket.send(JSON.stringify({
//         type: "error",
//         message: "Join a room first"
//       }));
//       return;
//     }
//     if (isRateLimited(socket.userId!)) {
//   socket.send(JSON.stringify({
//     type: "error",
//     message: "Too many messages. Slow down."
//   }));
//   return;
// }
//     const messageData = {
//       userId: socket.userId!,
//       room: socket.room!,
//       message: msg.message,
//       createdAt: new Date()
//     };

//     await MessageCollection.insertOne(messageData);
//     wss.clients.forEach((client: AuthSocket) => {
//       if (
//         client.readyState === 1 &&
//         client.room === socket.room
//       ) {
//         client.send(JSON.stringify({
//           type: "chat",
//           data: messageData
//         }));
//       }
//     });
//   }
// });
//     socket.on("pong", () => {
//         console.log("PONG received from", socket.userId);
//       socket.isAlive = true;
//     });

//   });
//   setInterval(() => {

//     wss.clients.forEach((socket: AuthSocket) => {
//       if (!socket.isAlive) {
//         socket.terminate();
//         return;
//       }

//       socket.isAlive = false;
//       socket.ping();
//       console.log("PING sent");
//     });
//   }, 30000);
// }