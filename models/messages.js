const pool = require("../db/pool");

async function addNewMessageToDb(req, res) {
  const { id } = req.user;
  const { newTitle, newMessage } = req.body;

  await pool.query(
    `INSERT INTO messages (user_id, title, text)
        VALUES ($1, $2, $3)
    `,
    [id, newTitle, newMessage.trim()],
  );
}

async function getAllMessages(req, res) {
  const result = await pool.query(
    `SELECT username, member, admin, title, text, timestamp
            FROM messages
            JOIN users ON messages.user_id = users.id
        `,
  );

  return result.rows;
}

module.exports = { addNewMessageToDb, getAllMessages };
