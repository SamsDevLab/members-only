const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/auth.js");
const validateUserSignUp = require("../middleware/validators.js");

router.get("/log-in", authController.renderLoginForm);
router.post(
  "/log-in",
  passport.authenticate("local", (error, user, info) => {
    if (error) {
      console.log(error);
    }
  }),
);

router.get("/log-out", authController.logOut);

router.get("/sign-up", authController.renderSignUpForm);
router.post("/sign-up", validateUserSignUp, authController.submitNewUser);

module.exports = router;
