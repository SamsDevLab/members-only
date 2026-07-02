const { matchedData } = require("express-validator");
const usersModel = require("../models/users");

function renderLoginForm(req, res) {
  const errorMessages = req.session.messages;
  req.session.messages = [];

  res.render("auth/login", { title: "Login Form", errors: errorMessages });
}

function renderSignUpForm(req, res) {
  res.render("auth/signup", { title: "Sign-Up Form" });
}

async function submitNewUser(req, res, next) {
  const { passwordConfirmation, ...userData } = req.body;
  const newUser = { ...userData };
  const newUserId = await usersModel.addNewUser(newUser);

  req.login(newUserId.id, function (err) {
    if (err) {
      return next(err);
    }
    return res.redirect("/");
  });
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
