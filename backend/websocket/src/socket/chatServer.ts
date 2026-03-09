import { WebSocketServer } from "ws";
import { AuthSocket } from "../types";
import { verifyToken } from "../auth";
import { handleMessage } from "./handleMsg";

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
