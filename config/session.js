const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const pool = require("../db/pool");

const sessionConfig = {
  store: new pgSession({
    pool: pool,
    tableName: "session",
  }),
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
};

module.exports = sessionConfig;
