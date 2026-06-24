const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/auth.js");
const validateUserSignUp = require("../middleware/validators.js");

router.get("/login", authController.renderLoginForm);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureMessage: true,
  }),
);

router.get("/logout", authController.logOut);

router.get("/signup", authController.renderSignUpForm);
router.post("/signup", validateUserSignUp, authController.submitNewUser);

module.exports = router;
