const express = require("express");
const router = express.Router();
const membershipController = require("../controllers/membership");

router.get("/", membershipController.renderMemberSignup);

module.exports = router;
