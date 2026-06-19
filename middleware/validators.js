const { body, validationResult } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

const validateUserSignUp = [
  body("firstName")
    .trim()
    .isLength({ min: 1 })
    .withMessage("First name has to be at least 1 character long.")
    .isAlpha()
    .withMessage("First name can only contain alphabetic characters"),
  body("lastName")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Last name has to be at least 1 character long.")
    .isAlpha()
    .withMessage("Last name can only contain alphabetic characters"),
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long."),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.")
    .matches("^[A-Za-z0-9!@_\\-#$%*+.]+$")
    .withMessage(
      "Only letters, numbers, and special characters !@_-#$%*+. are allowed.",
    ),
  body("passwordConfirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password.");
    }
    return true;
  }),
  handleValidationErrors,
];

module.exports = validateUserSignUp;
