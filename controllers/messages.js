const messagesModel = require("../models/messages");

async function addNewMessage(req, res) {
  await messagesModel.addNewMessageToDb(req);
  res.redirect("/");
}

async function deleteMessage(req, res) {
  await messagesModel.deleteMessageFromDb(req);
  res.redirect("/");
}

module.exports = { addNewMessage, deleteMessage };
