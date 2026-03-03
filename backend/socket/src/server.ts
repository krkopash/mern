import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";

import registerChatSocket from "./socket/socket";
import viewRoutes from "./routes/routes";
import { connectDB } from "./db/db";

const app = express();
const server = http.createServer(app);

const io = new Server(server);

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.static("public"));
app.use("/", viewRoutes);

registerChatSocket(io);

server.listen(3000, () => {
  console.log("Server running");
});