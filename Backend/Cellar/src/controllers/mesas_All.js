const  db = require("../models/index");
const mesas_all =  (req, res) => {
    
  console.log("Estoy en el Get");
  const mesa= db.mesa;
  
  
      return mesa.findAll()
     .then((c =>{
         
         let mesas=c.map(m=>{
             console.log(m.dataValues.numero);
             console.log(m.dataValues.capacidad);
             return {mesa:m.dataValues.numero , cap:m.dataValues.capacidad}
         })
         console.log(mesas);
         mesas.sort();
      return  res.json(mesas)
      })).catch((err) => { 
          console.log(err);
          return res.send(err)
          })
    
}

module.exports = mesas_all;