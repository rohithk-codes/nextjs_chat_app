import messageService from "../../services/messageServices.js"

export default socket  = (io)=>{
    io.on("connection",(socket)=>{
        console.log("A user connected: " + socket.id)
        
        socket.on("join_room",(roomId)=>{
            socket.join(roomId)
            console.log(`User ${socket.id} joined room ${roomId}`)
        })
        
        socket.on("send_message",async({data})=>{
            const savedMessage = await messageService.createMessage(data.roomId,data.senderId,data.message)
            io.to(data.roomId).emit("receive_message",savedMessage)
        })
        

    })
}