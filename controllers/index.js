async function getHomepage(req, res) {
  res.render("index", { title: "Boat Club Messaging App" });
}

module.exports = { getHomepage };
