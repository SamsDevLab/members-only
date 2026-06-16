async function getSignUpForm(req, res) {
  res.render("auth/sign-up", { title: "Sign-Up Form" });
}

async function submitNewUser(req, res) {
  console.log(req.body);
  res.redirect("/");
}

module.exports = { getSignUpForm, submitNewUser };
