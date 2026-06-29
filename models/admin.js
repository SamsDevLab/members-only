const pool = require("../db/pool");

async function upgradeToAdmin(user) {
  await pool.query(
    `UPDATE users
        SET admin = true
        WHERE id = $1
    `,
    [user.id],
  );
}

module.exports = { upgradeToAdmin };
