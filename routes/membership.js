const express = require("express");
const router = express.Router();
const membershipController = require("../controllers/membership");

router.get("/", membershipController.renderMemberSignup);
router.post("/", membershipController.upgradeToMember);

module.exports = router;
