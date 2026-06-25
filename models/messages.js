const pool = require("../db/pool");

async function addNewMessageToDb(req, res) {
  const { id } = req.user;
  const { newTitle, newMessage } = req.body;

  const rows = await pool.query(
    `INSERT INTO messages (user_id, title, text)
        VALUES ($1, $2, $3)
    `,
    [id, newTitle, newMessage.trim()],
  );
}

module.exports = { addNewMessageToDb };
