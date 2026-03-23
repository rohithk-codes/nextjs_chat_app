import {getConversationById,createConversation} from "../repositories/messageRepository.js";
export const createMessages = async (conversationId,senderId,message)=>{
    return await  createConversation(
        conversationId,senderId,message
    )
}

export const getMessages = async (conversationId)=>{
    return await getConversationById(conversationId)
}