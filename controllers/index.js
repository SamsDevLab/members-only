const messagesModel = require("../models/messages");

async function getHomepage(req, res) {
  const allMessages = await messagesModel.getAllMessages();
  const user = req.user;
  res.render("index", {
    title: "Golden Anchor Message Board",
    messages: allMessages,
    user: user,
  });
}

module.exports = { getHomepage };
