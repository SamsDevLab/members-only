const bcrypt = require("bcryptjs");

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
  const match = await bcrypt.compare(
    passwordAttempt,
    process.env.ADMIN_PASSWORD,
  );

  if (!match) {
    res.render("auth/admin", {
      title: "Admin Sign Up",
      currentUser: req.user,
      errMsg: "Incorrect password",
    });
  } else {
    console.log("Justin Townes Earle");
  }
}

module.exports = { attemptUpgradeToAdmin, renderAdminSignup };
