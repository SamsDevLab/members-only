const bcrypt = require("bcryptjs");
const membershipModel = require("../models/membership");

async function renderMemberSignup(req, res) {
  const user = req.user;
  res.render("auth/membership", {
    title: "Member Sign up",
    currentUser: user,
    errMsg: null,
  });
}

async function attemptUpgradeToMember(req, res) {
  const passwordAttempt = req.body.passwordAttempt;

  if (passwordAttempt !== process.env.MEMBER_PASSWORD) {
    res.render("auth/membership", {
      title: "Member Sign Up",
      currentUser: req.user,
      errMsg: "Incorrect password",
    });
  } else {
    await membershipModel.upgradeToMember(req.user);
    res.redirect("/");
  }
}

module.exports = { renderMemberSignup, attemptUpgradeToMember };
