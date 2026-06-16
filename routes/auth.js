const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.js");

router.get("/sign-up", authController.getSignUpForm);

module.exports = router;
