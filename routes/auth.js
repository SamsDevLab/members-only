const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.js");
const validateUserSignUp = require("../middleware/validators.js");

router.get("/sign-up", authController.getSignUpForm);
router.post("/sign-up", validateUserSignUp, authController.submitNewUser);

module.exports = router;
