const bcrypt = require("bcryptjs");

async function renderMemberSignup(req, res) {
  const user = req.user;
  res.render("auth/membership", { title: "Member Sign up", currentUser: user });
}

async function upgradeToMember(req, res) {
  const passwordAttempt = req.body.passwordAttempt;
  const match = await bcrypt.compare(
    passwordAttempt,
    process.env.MEMBER_PASSWORD,
  );

  console.log(match);
}

module.exports = { renderMemberSignup, upgradeToMember };
