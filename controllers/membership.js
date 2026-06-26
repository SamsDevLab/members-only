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
  const match = await bcrypt.compare(
    passwordAttempt,
    process.env.MEMBER_PASSWORD,
  );

  if (!match) {
    res.render("auth/membership", {
      title: "Member Sign Up",
      currentUser: req.user,
      errMsg: "Incorrect password",
    });
  } else {
    membershipModel.upgradeToMember(req.user);
  }
}

module.exports = { renderMemberSignup, attemptUpgradeToMember };
