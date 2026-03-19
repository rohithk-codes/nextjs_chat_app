import pool from "../config/db"

export const saveMessage = async(conversationId,senderId,content)=>{
   const result = await pool.query(
    `INSERT INTO messages(conversation_id,sender_id,content)
    VALUES ($1,$2,$3) RETURNING *`,
    [conversationId,senderId,content]
   )
   return result.rows[0]
}

export const getMessagesByConversation = async (conversationId)=>{
    const result = await pool.query(
        `SELECT * FROM messages
        WHERE conversation_id=$1
        ORDER BY created_at ASC`,
        [conversationId]
    )
    return result.rows
}