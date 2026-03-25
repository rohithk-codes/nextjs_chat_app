import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();
import messageRoutes from "./routes/messageRoutes.js";
import {chatSocket} from "./config/sockets/chatSocket.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors())
app.use(cookieParser())

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

app.use("/api/chat",messageRoutes)
chatSocket(io)


server.listen(PORT,()=>{
    console.log(`Server is runnig in http://localhost:${PORT}`);

})
