const { matchedData } = require("express-validator");
const usersModel = require("../models/users");

function renderLoginForm(req, res) {
  res.render("auth/log-in", { title: "Login Form" });
}

function renderSignUpForm(req, res) {
  res.render("auth/sign-up", { title: "Sign-Up Form" });
}

function submitNewUser(req, res) {
  const { passwordConfirmation, ...userData } = req.body;
  const newUser = { ...userData };

  usersModel.addNewUser(newUser);
}

// This controller will also include login, becoming a member, becoming admin as these all fall under auth

module.exports = {
  renderLoginForm,
  renderSignUpForm,
  submitNewUser,
};
