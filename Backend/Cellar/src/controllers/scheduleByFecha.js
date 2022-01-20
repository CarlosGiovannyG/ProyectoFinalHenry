const  db = require("../models/index");
const verificacion = require("./verificacion");
// formato de fecha ==    2022-01-11T16:40  
const scheduleByFecha = async (req, res) => {

  const schedule= db.schedule;
  let fecha= ""; // req.params.fecha;
  console.log(" por parametros ", req.params.fecha)  ;
  if(req.params.fecha.length===16){
    fecha= req.params.fecha;
  }else{
    if(req.body.fecha && true ){ if(req.body.fecha.length===16){ fecha=req.body.fecha; } 
      else return res.json( {message:"el dato ingresado no es válido"} )
  }else return res.json( {message:"el dato ingresado no es válido"} )
}  

let verif =  verificacion({fecha }) //funcion de verificacion  

if(verif.bandera2 && verif.bandera3){

  fechareserva = verif.fechareserva
  return schedule.findByPk(fechareserva)
  .then((k)=> {
    if(k===null){
      //si no existe la feche entrada, se retorna un arreglo vacio
      console.log("En esta fecha todas las mesas entan libres entan libres");

  
      console.log("Estoy en el Get");
      const mesa= db.mesa;
      const usertable = db.usertable;
      console.log(usertable);
          return mesa.findAll()
         .then((c =>{
             console.log(c); 
             // forma un arreglo de datos
              let mesastotal = c.map(m=>{
               console.log(m.dataValues)
              let numero = m.dataValues.numero.toString()
              let capacidad = m.dataValues.capacidad.toString()
              return  {mesa: numero, cap: capacidad  }  // "mesa:"+ numero+"C" + capacidad 
              //{mesa:m.dataValues.numero , cap:m.dataValues.capacidad}
              
            })   //sort();
            mesastotal.sort()

             return res.json({ 
        message:"En esta fecha todas las mesas entan libres entan libres", 
        mesastotal });
          
          })).catch((err) => { 
              console.log(err);
              return res.send(err)
              })
    } 
    if(k!=null){
      //si existe la fecha entrada, se retorna su contenido
      console.log( "Lo de traefecha: ", k.dataValues, " :)") ;

      let fecha= k.dataValues.fecha, mesas= k.dataValues.mesasLibres, sillas= k.dataValues.sillasLibres   ;
      
      let stringarraymesas = mesas.split(","); // strign a arry
      console.log( stringarraymesas );

      let arrmesas=[];

      for (let i = 0; i < stringarraymesas.length; i++) {
        let mesa= stringarraymesas[i][5] + stringarraymesas[i][6];
        mesa= mesa*1;
        let cap = stringarraymesas[i][8] ;
        cap = cap*1;
        arrmesas.push({mesa,  cap })
        //{m.dataValues.numero , cap:m.dataValues.capacidad}   m[5] + m[6] 
      }
      
      console.log(arrmesas);

      return res.json({ message:"estos son las mesas disponibles", arrmesas });

    } 
  }) 
  .catch((err) => console.log("error error error error en scheduleByFecha  "))
}else{
  console.log("el dato: ",fecha," no es válido ")
  return res.json( {message:"el dato ingresado no es válido"} )
} 

}

module.exports = scheduleByFecha;