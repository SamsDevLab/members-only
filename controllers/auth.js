const { matchedData } = require("express-validator");
const usersModel = require("../models/users");

async function getSignUpForm(req, res) {
  res.render("auth/sign-up", { title: "Sign-Up Form" });
}

async function submitNewUser(req, res) {
  const { passwordConfirmation, ...userData } = req.body;
  const newUser = { ...userData };

  usersModel.addNewUser(newUser);
}

// This controller will also include login, becoming a member, becoming admin as these all fall under auth

module.exports = { getSignUpForm, submitNewUser };
