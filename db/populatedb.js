const { Client } = require("pg");
const bcrypt = require("bcryptjs");

const users = [
  { first_name: "Ernest", last_name: "Van Cleef", username: "captvancleef" },
  { first_name: "Beatrice", last_name: "Montague", username: "ladymontague" },
  {
    first_name: "Archibald",
    last_name: "Worthington",
    username: "aworthington",
  },
];

async function addUsersToDatabase() {
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(
      process.env.SEED_USER_PASSWORD,
      10,
    );
    user.password = hashedPassword;
  }

  const insertUsers = {
    text: `WITH inserted_rows AS (
      INSERT INTO users (first_name, last_name, username, password, member, admin)
            VALUES
            ($1, $2, $3, $4, $5, $6),
            ($7, $8, $9, $10, $11, $12),
            ($13, $14, $15, $16, $17, $18)
        RETURNING id
    )
    SELECT ARRAY(SELECT id FROM inserted_rows) AS ids
    `,
    values: [
      users[0].first_name,
      users[0].last_name,
      users[0].username,
      users[0].password,
      true,
      true,
      users[1].first_name,
      users[1].last_name,
      users[1].username,
      users[1].password,
      true,
      false,
      users[2].first_name,
      users[2].last_name,
      users[2].username,
      users[2].password,
      false,
      false,
    ],
  };

  return insertUsers;
}

async function addMessagesToDatabase(userIdsArr) {
  const insertMessages = {
    text: `
    INSERT INTO messages (user_id, title, text)
      VALUES 
        ($1, $2, $3),
        ($4, $5, $6),
        ($7, $8, $9)
    `,
    values: [
      userIdsArr[0],
      "Catalina Wine Mixer",
      "I fully anticipate this year's Catalina Wine Mixer to serve as an exquisite display of luxury.",
      userIdsArr[1],
      "Catalina is Quite Luxurious... Yet Surprisingly Economical",
      "It costs a mere $12,000 for a round trip to Catalina aboard my 55-foot Oceanco. Frankly, I find the expense to be rather modest.",
      userIdsArr[2],
      "Monaco Favored Over Catalina",
      "Monaco is decidely preferable to Catalina. Catalina is acceptable in a pinch—if one enjoys mingling with the unwashed masses. One truly hasn't lived until one has made passage to Monaco.",
    ],
  };

  return insertMessages;
}

const databaseUrl = process.env.DATABASE_URL;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `${databaseUrl}`,
  });
  await client.connect();
  const insertUsers = await addUsersToDatabase();
  const result = await client.query(insertUsers);
  const userIdsArr = result.rows[0].ids;
  const insertMessages = await addMessagesToDatabase(userIdsArr);
  await client.query(insertMessages);
  await client.end();
  console.log("done");
}

main();
