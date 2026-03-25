

import messageService from "../../services/messageServices.js"
import messageRepo from "../../repositories/messageRepository.js" 

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

                let conversation = await messageRepo.getConversationById(conversationId)
                if (!conversation) {
                    conversation = await messageRepo.createConversation({ id: conversationId })
                }

                const savedMessage = await messageService.createMessages(conversationId, data.senderId, data.message)
                io.to(conversationId).emit("receive_message", savedMessage)

            } catch (err) {
                console.error("send_message error:", err)
                socket.emit("error", { message: "Failed to send message" })
            }
        })
    })
}