const express = require("express");
const app = express();
const path = require("node:path");
const passport = require("passport");
const session = require("express-session");
const sessionConfig = require("./config/session");
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const errorHandler = require("./middleware/errorHandler");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session(sessionConfig));
app.use(passport.session());
app.use((req, res, next) => {
  if (req.session.passport !== null || req.session.passport !== undefined) {
    console.log(req.session);
    console.log(req.user);
    next();
  } else {
    console.log("No user logged in");
    console.log(req.session);
  }
});

require("./config/passport")(passport);

app.use((req, res, next) => {
  res.locals.currentUser = req.user; // Makes 'currentUser' available in all ejs files
  next();
});

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
