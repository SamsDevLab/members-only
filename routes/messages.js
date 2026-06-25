const express = require("express");
const router = express.Router();

router.post("/add-message", (req, res) => {
  const { newMessage } = req.body;
  console.log(newMessage.trim());
});

module.exports = router;
