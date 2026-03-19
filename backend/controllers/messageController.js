import messageService from '../services/messageServices.js'

export const getMessages = async (req, res) => {  

    try {
        const { conversationId } = req.params
        const messages = await messageService.getMessages(conversationId)
        res.json(messages)
    } catch (error) {
       res.staus(500).json({error: 'Failed to get messages'}) 
    }

}

export const createMessage = async(req,res)=>{

    try {
        
const{conversationId,senderId,content} = req.body
const messages = await messageService.createMessage(conversationId,senderId,content)
res.json(messages)

    } catch (error) {
        res.status(500).json({error: 'Failed to create message'})   
    }


}