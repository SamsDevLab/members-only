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
    `SELECT messages.id AS messageid, username, member, admin, title, text, timestamp
            FROM messages
            JOIN users ON messages.user_id = users.id
        `,
  );

  return result.rows;
}

async function deleteMessageFromDb(req, res) {
  const id = req.body.messageId;
  await pool.query(
    `DELETE FROM messages
      WHERE messages.id = $1
    `,
    [id],
  );
}

module.exports = { addNewMessageToDb, getAllMessages, deleteMessageFromDb };
