import express from "express";
import http from "http";
import { Server } from "socket.io";
import msg from "./msg.js";
import path from "path";
import chatSocket from "./chat.js";
const app = express();

import { connectDB } from "./db.js";
connectDB();

app.use(express.json());

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("chat");
});

const server = http.createServer(app);
const io = new Server(server);
chatSocket(io);

server.listen(3000, () => {
  console.log("Server running on port 5000");
});