const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.js");
const validateUserSignUp = require("../middleware/validators.js");

router.get("/log-in", authController.renderLoginForm);
router.post("/log-in", authController.logInUser);

router.get("/sign-up", authController.renderSignUpForm);
router.post("/sign-up", validateUserSignUp, authController.submitNewUser);

module.exports = router;
