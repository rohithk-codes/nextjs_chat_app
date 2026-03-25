import messageService from "../services/messageServices.js";

class MessageController {
  getMessage = async (req, res) => {
    try {
      const { conversationId } = req.params;
      const messages = await messageService.getMessages(conversationId);
      res.json(messages ?? []);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Failed to get messages" });
    }
  };

  createMessage = async (req, res) => {
    try {
      const { conversationId, senderId, content } = req.body;
     
      const messages = await messageService.createMessages(conversationId, senderId, content);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to create message" });
    }
  };
}

export default new MessageController()
