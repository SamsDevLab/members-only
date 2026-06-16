async function getSignUpForm(req, res) {
  res.render("auth/sign-up", { title: "Sign-Up Form" });
}

module.exports = { getSignUpForm };
