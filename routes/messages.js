const express = require("express");
const router = express();
const messagesController = require("../controllers/messages");

router.post("/add-message", messagesController.addNewMessage);

module.exports = router;
