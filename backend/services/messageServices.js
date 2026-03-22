import {getMessagesByConversation,saveMessage} from "../repositories/messageRepository.js";
export const createMessages = async (conversationId,senderId,content)=>{
    return await  saveMessage(
        conversationId,senderId,content
    )
}

export const getMessages = async (roomId)=>{
    return await getMessagesByConversation(roomId)
}