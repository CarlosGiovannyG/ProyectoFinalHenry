const { format } = require("express/lib/response");
const  db = require("../models/index");
const schedule_all =  (req, res) => {
  
    let fecha=[] ;
        
  console.log("Estoy en el Get del schedule_all");
  const schedule= db.schedule;
      return schedule.findAll()
     .then((c =>{
      fecha = c.map(d=>{      
        console.log(d.dataValues) 
        
        let mesaslibres=  d.dataValues.mesasLibres

        let arraymesas = mesaslibres.split(","); // strign a arry
                
        arraymesas.sort();
// *************************
      
      let arrmesas=[];

      for (let i = 0; i < arraymesas.length; i++) {
        let mesa= arraymesas[i][5] + arraymesas[i][6];
        mesa= mesa*1;
        let cap = arraymesas[i][8] ;
        cap = cap*1;
        arrmesas.push({mesa,  cap })
        //{m.dataValues.numero , cap:m.dataValues.capacidad}   m[5] + m[6] 
      }
      

        if(mesaslibres.length>0) return {fecha: d.dataValues.fecha,  arrmesas} 
        return d.dataValues.fecha+ " con : 0 sillas libres"
      })
      
      console.log(fecha); 
     
      return  res.json( fecha )

      })).catch((err) => { 
          console.log(err);
          return res.json("error  error error  error error  error")
          })          
}

module.exports = schedule_all;