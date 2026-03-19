import messageRepo from "../repositories/messageRepository"

export const createMessage = async (conversationId,senderId,content)=>{
    return await messageRepo.saveMessage(
        conversationId,senderId,content
    )
}

export const getMessages = async (conversationId)=>{
    return await messageRepo.getMessagesByConversation(conversationId)
}