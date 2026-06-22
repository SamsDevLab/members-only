const bcrypt = require("bcryptjs");
const pool = require("../db/pool");

async function addNewUser(user) {
  const { firstName, lastName, username, password } = user;
  const hashedPassword = await bcrypt.hash(password, 10);

  //   await pool.query(
  //     `INSERT INTO users (first_name, last_name, username, password)
  //           VALUES($1, $2, $3, $4)
  //       `,
  //     [firstName, lastName, username, hashedPassword],
  //   );
}

module.exports = { addNewUser };
