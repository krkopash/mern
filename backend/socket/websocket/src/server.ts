import { startChatServer } from "./websocket/chatServer";
import { db } from "./db";
import { startApiServer } from "./apiServer";

async function start() {
  await db();
  startApiServer();
  startChatServer();
}

start();