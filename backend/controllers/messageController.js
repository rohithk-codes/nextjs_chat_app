import {createMessages,getMessages} from '../services/messageServices.js'

export const getMessage = async (req, res) => {  

    try {
        const { conversationId } = req.params
        console.log('conversationId:', conversationId)
        const messages = await getMessages(conversationId)
        console.log('messages:', messages)
        res.json(messages)
    } catch (error) {
        console.error('Error fetching messages:', error)
       res.status(500).json({error: 'Failed to get messages'}) 
    }

}

export const createMessage = async(req,res)=>{

    try {
        
const{conversationId,senderId,content} = req.body
const messages = await createMessages(conversationId,senderId,content)
res.json(messages)

    } catch (error) {
        res.status(500).json({error: 'Failed to create message'})   
    }


}