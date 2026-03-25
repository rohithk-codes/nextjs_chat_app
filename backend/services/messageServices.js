import messageRepo from "../repositories/messageRepository.js";

class MessageService {

 async   createMessages   (conversationId, senderId, message) {
  return await messageRepo.createConversation(
    conversationId,
    senderId,
    message,
  );
};

  async getMessages (conversationId) {
  return await messageRepo.getConversationById(conversationId);
};

}

export default new MessageService()