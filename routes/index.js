const express = require("express");
const router = express.Router();

router.use("/", indexController.getHomepage);

module.exports = router;
