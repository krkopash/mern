import { WebSocketServer } from "ws";
import { AuthSocket } from "../types";
import { verifyToken } from "../auth";
import { handleMessage } from "./messageHandler";

export function startChatServer() {
  const wss = new WebSocketServer({ port: 5000 });
  console.log("WebSocket running");
  wss.on("connection", (socket: AuthSocket, req) => {
    const params = new URL(req.url!, "http://localhost").searchParams;
    const token = params.get("token");
    const user = verifyToken(token || "");
    if (!user) {
      socket.close();
      console.log("user not exist");
      return;
    }
    socket.userId = (user as any).id;
    socket.isAlive = true;
    console.log("User connected:", socket.userId);

    socket.on("message", async (data: any) => {
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
      console.log("PING sent", socket.userId);
    });
  }, 30000);

}