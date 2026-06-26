const pool = require("../db/pool");

async function upgradeToMember(user) {
  const result = await pool.query(
    `UPDATE users
        SET member = true
        WHERE id = $1
    `,
    [user.id],
  );
}

module.exports = { upgradeToMember };
