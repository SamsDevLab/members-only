const express = require("express");
const app = express();
const session = require("express-session");
const PgSession = require("connect-pg-simple")(session);

app.use(
  session({
    store: new PgSession({
      pool,
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);
