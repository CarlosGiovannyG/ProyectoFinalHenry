const  db = require("../models/index");
const mesas_all =  (req, res) => {    
   
  const mesa= db.mesa;  
  
      return mesa.findAll()
     .then((c =>{
         
         let mesas=c.map(m=>{
            
             return {mesa:m.dataValues.numero , cap:m.dataValues.capacidad}
         })
          
         mesas.sort();
      return  res.json(mesas)
      })).catch((err) => { 
           
          return res.send(err)
          })
    
}

module.exports = mesas_all;