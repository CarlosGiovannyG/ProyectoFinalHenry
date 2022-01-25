const db = require("../models/index");
const usertable = (req, res) => {

    console.log("Estoy en el Get del usertable");
    const usertable = db.usertable;

    return usertable.findAll()
        .then((c => {
            console.log(c);
            return res.json(c)
        })).catch((err) => {
            console.log(err);
            return res.send(err)
        })


}

module.exports = usertable;