const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.js");

router.get("/sign-up", authController.getSignUpForm);
router.post("/sign-up", authController.submitNewUser);

module.exports = router;
