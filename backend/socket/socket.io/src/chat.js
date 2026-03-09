import Message from "./msg.js";

export default function chatSocket(io){

      io.on("connection",(socket)=>{
            socket.on("join-room", async({username,room})=>{
                  socket.join(room)
                  const messages = await Message.find({ room }).sort({ time: 1 });
                  socket.emit("chat-history", messages);
                  socket.to(room).emit("user-joined", username);
            })

            socket.on("send-message",async(data)=>{
                  const newMsg = await Message.create({username:data.username, room:data.room,
                        message:data.message,status:"sent"})
                  io.to(data.room).emit("receive-message",newMsg)
            })
            
            socket.on("message-delivered",async(id)=>{
                  await Message.findByIdAndUpdate(id,{status:"delivered"})
                  io.emit("message-status",{id,status:"delivered"})
            })
      })
}