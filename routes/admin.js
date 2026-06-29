const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

router.get("/", adminController.renderAdminSignup);
router.post("/", adminController.attemptUpgradeToAdmin);

module.exports = router;
