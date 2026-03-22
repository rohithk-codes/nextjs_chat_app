import express from "express"
const router = express.Router()


 import {getMessage,createMessage}  from '../controllers/messageController.js'


router.get('/:conversationId',getMessage)
router.post('/',createMessage)

export default router