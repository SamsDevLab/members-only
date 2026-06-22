const bcrypt = require("bcryptjs");
const { matchedData } = require("express-validator");
const usersModel = require("../models/users");

// bcrypt passwords here before passing to model

async function getSignUpForm(req, res) {
  res.render("auth/sign-up", { title: "Sign-Up Form" });
}

async function submitNewUser(req, res) {
  const { password, passwordConfirmation, ...userData } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { ...userData, password: hashedPassword };
  usersModel.addNewUser(newUser);
}

// This controller will also include login, becoming a member, becoming admin as these all fall under auth

module.exports = { getSignUpForm, submitNewUser };
