import pool from "../config/db.js";

class MessageRepository {
  async getConversationById(conversationId) {
    const result = await pool.query(
      `SELECT * FROM conversations WHERE id = $1`,
      [conversationId],
    );
    return result.rows[0] || null;
  }

  async createConversation() {
    const result = await pool.query(
      `INSERT INTO conversations DEFAULT VALUES RETURNING *`,
    );
    return result.rows[0];
  }
}

export default new MessageRepository()