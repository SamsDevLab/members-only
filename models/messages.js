async function addNewMessageToDb(req, res) {
  console.log(req.body);
  console.log(req.user);
}

module.exports = { addNewMessageToDb };
