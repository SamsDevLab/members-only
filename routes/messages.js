const express = require("express");
const router = express();
const messagesController = require("../controllers/messages");

router.post("/add-message", messagesController.addNewMessage);
router.post("/delete-message", messagesController.deleteMessage);

module.exports = router;
