import pool from "../config/db.js";

class UserRepository {
  async createUser(email, password) {
    const result = await pool.query(
      `INSERT INTO users(name,email,password) 
        VALUES ($1,$2) RETURNING *`,
      [email, password],
    );
    return result.rows[0];
  }

  async FindUserByEmail(email) {
    const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);
    return result.rows[0];
  }
}


export default new UserRepository()