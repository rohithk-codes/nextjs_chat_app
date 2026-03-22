import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();
import messageRoutes from "./routes/messageRoutes.js";


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


app.use("/api/chat",messageRoutes)



server.listen(PORT,()=>{
    console.log(`Server is runnig in http://localhost:${PORT}`);

})


