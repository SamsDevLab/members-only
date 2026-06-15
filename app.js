const express = require("express");
const app = express();
const path = require("node:path");
const { body, validationResult, matchedData } = require("express-validator");
const indexRouter = require("./routes/index");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
