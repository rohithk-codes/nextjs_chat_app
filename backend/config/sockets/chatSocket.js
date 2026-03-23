// import {createMessages} from "../../services/messageServices.js"
// import {getConversationById,createConversation} from "../../repositories/messageRepository.js"

// export const chatSocket  = (io)=>{
//     io.on("connection",(socket)=>{
//         console.log("A user connected: " + socket.id)
        
//         socket.on("join_room",(conversationId)=>{
//             socket.join(conversationId)
//             console.log(`User ${socket.id} joined room ${conversationId}`)
//         })
        
//         socket.on("send_message",async(data)=>{

//             let conversation = await getConversationById(data.conversationId)
//             if(!conversation){
//                 const data = await createConversation(data)
//             }

//             const savedMessage = await createMessages(data.conversationId,data.senderId,data.message)
//             io.to(data.conversationId).emit("receive_message",savedMessage)
//         })
        

//     })
// }



import { createMessages } from "../../services/messageServices.js"
import { getConversationById, createConversation } from "../../repositories/messageRepository.js" // ✅ import these

export const chatSocket = (io) => {
    io.on("connection", (socket) => {
        console.log("A user connected: " + socket.id)

        socket.on("join_room", (conversationId) => {
            socket.join(String(conversationId))  
            console.log(`User ${socket.id} joined room ${conversationId}`)
        })

        socket.on("send_message", async (data) => {
            try {
                const conversationId = String(data.conversationId) 

                let conversation = await getConversationById(conversationId)
                if (!conversation) {
                    conversation = await createConversation({ id: conversationId })
                }

                const savedMessage = await createMessages(conversationId, data.senderId, data.message)
                io.to(conversationId).emit("receive_message", savedMessage)

            } catch (err) {
                console.error("send_message error:", err)
                socket.emit("error", { message: "Failed to send message" })
            }
        })
    })
}