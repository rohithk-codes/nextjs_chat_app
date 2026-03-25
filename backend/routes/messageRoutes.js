import express from "express"
const router = express.Router()


 import messageController  from '../controllers/messageController.js'


router.get('/:conversationId',messageController.getMessage)
router.post('/messages',messageController.createMessage)

export default router