const { matchedData } = require("express-validator");
const usersModel = require("../models/users");

function renderLoginForm(req, res) {
  const messages = req.session.messages;
  console.log(messages);
  res.render("auth/login", { title: "Login Form", messages: messages });
}

function renderSignUpForm(req, res) {
  res.render("auth/signup", { title: "Sign-Up Form" });
}

function submitNewUser(req, res) {
  const { passwordConfirmation, ...userData } = req.body;
  const newUser = { ...userData };

  usersModel.addNewUser(newUser);
}

function logOut(req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

// This controller will also include login, becoming a member, becoming admin as these all fall under auth

module.exports = {
  renderLoginForm,
  renderSignUpForm,
  submitNewUser,
  logOut,
};
