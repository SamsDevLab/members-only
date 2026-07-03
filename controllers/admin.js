const bcrypt = require("bcryptjs");
const adminModel = require("../models/admin");

function renderAdminSignup(req, res) {
  const user = req.user;
  res.render("auth/admin", {
    title: "Admin Sign Up",
    currentUser: user,
    errMsg: null,
  });
}

async function attemptUpgradeToAdmin(req, res) {
  const passwordAttempt = req.body.passwordAttempt;

  if (passwordAttempt !== process.env.ADMIN_PASSWORD) {
    res.render("auth/admin", {
      title: "Admin Sign Up",
      currentUser: req.user,
      errMsg: "Incorrect password",
    });
  } else {
    adminModel.upgradeToAdmin(req.user);
    res.redirect("/");
  }
}

module.exports = { attemptUpgradeToAdmin, renderAdminSignup };
