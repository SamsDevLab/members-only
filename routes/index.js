const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");

router.use("/", indexController.getHomepage);

module.exports = router;
