import pool from "../config/db.js"

export const getConversationById = async (conversationId) => {
    const result = await pool.query(
        `SELECT * FROM conversations WHERE id = $1`,
        [conversationId]
    )
    return result.rows[0] || null  
}


export const createConversation = async () => {
    const result = await pool.query(
        `INSERT INTO conversations DEFAULT VALUES RETURNING *`
    )
    return result.rows[0]
}