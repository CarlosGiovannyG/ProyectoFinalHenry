const  db = require("../models/index");
const food_all =  (req, res) => {
    
  console.log("Estoy en el Get");
  const aliment= db.aliment;
    return aliment.findAll()
    .then((c =>{
     //console.log(c);
     return  res.json(c)
     })).catch((err) => { 
         console.log(err);
         res.send(err)
         })    
}

module.exports = food_all;