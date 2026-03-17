import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("join-room", (roomId) => {
        socket.join(roomId);
    })

    socket.on("send-message", (message) => {
        socket.emit("message", message);
    })
});



server.listen(PORT,()=>{
    console.log(`Server is runnig in http://localhost:${PORT}`);

})


