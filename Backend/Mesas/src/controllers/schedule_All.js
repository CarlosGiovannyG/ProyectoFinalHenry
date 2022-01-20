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
        let sillasLibres= d.dataValues.sillasLibres

        let mesaslibres=  d.dataValues.mesasLibres

        let arraymesas = mesaslibres.split(","); // strign a arry
        console.log("arraymesas y las sillas libres ", arraymesas, sillasLibres );
        
        //toma el numero de mesa y forma un arry de numeros
        let sillaslibres= arraymesas.map(m => { return m[8]*1 }) ;
        console.log( "sillaslibres" ,sillaslibres);
        let sumasillas=0;
        for (let i = 0; i < sillaslibres.length; i++) {
          sumasillas= sillaslibres[i] + sumasillas         
        }
        arraymesas.sort();
    
        if(mesaslibres.length>0) return {fecha: d.dataValues.fecha, sillasLibres: sumasillas,  mesasLibres:arraymesas} 
        return d.dataValues.fecha+ " con : 0 sillas libres"
      })
      let arreglo=[];
      fecha.sort();
      console.log(fecha); 
      fecha.map(k=>{
        console.log(k);
        arreglo.push(k.fecha);
        arreglo.push(k.arr); 
        console.log(k);
               
      })
      console.log(arreglo);
      return  res.json( fecha )

      })).catch((err) => { 
          console.log(err);
          return res.json("error  error error  error error  error")
          })          
}

module.exports = schedule_all;