import express from "express"
const router = express.Router()


 import {getMessages,createMessage}  from '../controllers/messageController.js'


router.get('/:conversationId',getMessages)
router.post('/',createMessage)

export default router