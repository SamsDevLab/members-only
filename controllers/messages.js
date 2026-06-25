const messagesModel = require("../models/messages");

async function addNewMessage(req, res) {
  await messagesModel.addNewMessageToDb(req);
  res.redirect("/");
}

module.exports = { addNewMessage };
