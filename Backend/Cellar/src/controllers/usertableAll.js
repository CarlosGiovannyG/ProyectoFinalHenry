const db = require("../models/index");
const usertable = (req, res) => {
    const usertable = db.usertable;
    return usertable.findAll()
        .then((c => {  return res.json(c) }))
        .catch((err) => {  return res.send(err) })
}

module.exports = usertable;