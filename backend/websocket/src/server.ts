import { startChatServer } from "./websocket/chatServer";
import { connectDB } from "./db";
import { startApiServer } from "./apiServer";

async function start() {

  await connectDB();

  startApiServer();
  startChatServer(5000);

}

start();