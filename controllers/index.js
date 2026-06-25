const messagesModel = require("../models/messages");

async function getHomepage(req, res) {
  const allMessages = await messagesModel.getAllMessages();
  res.render("index", {
    title: "Boat Club Messaging App",
    messages: allMessages,
  });
}

module.exports = { getHomepage };
