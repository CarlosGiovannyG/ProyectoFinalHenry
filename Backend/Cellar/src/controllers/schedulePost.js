const verificacion = require("./verificacion");
const separamesa = require("./separamesa");
const  db = require("../models/index");  


// formato de fecha ==    2022-01-11T16:40      
const entry = async (req, res) => {
    console.log("Estoy en el Post de schedulePost");
    const schedule= db.schedule;    // tabla de fechas de la base de datos
    const mesa= db.mesa;    // tabla mesa de la base de datos
    const usertable= db.usertable;
    const { fecha, estamesa , idclient}= req.body ;  // la fecha y el numero de sillas 
    //length
    let mesastotal=[];
    if(!fecha) return res.json( { message:"revisar datos ",fecha, numero , idclient } )
    // trae los datos de las mesas
try {
   mesastotal= await mesa.findAll()
} catch (error) {
  console.log(error)
}
// forma un arreglo de datos
mesastotal = mesastotal.map(m=>{
  console.log(m.dataValues)
  let numero = m.dataValues.numero.toString()
  let capacidad = m.dataValues.capacidad.toString()
  return "mesa:"+ numero+"C" + capacidad 
})
//tranforma el arreglo en una cadena de string 
  mesastotal.sort();
  mesastotal=mesastotal.toString()
  console.log("mesas totales: ",mesastotal);
let verif =  verificacion({fecha , estamesa , idclient }) //funcion de verificacion 
console.log(verif);
if( verif.bandera1 && verif.bandera2 && verif.bandera3){  
  fechareserva =  verif.fechareserva
  console.log("fecha de reserva: ",fechareserva);
    return schedule.findByPk(fechareserva)
    .then( async (k)=> {
      if(k===null){
        //si no existe la fecha entrada, la crea
        console.log("En esta fecha todas las mesas entan libres entan libres");
        // separa la mesa y entrega el resto         
       
        let x= separamesa( mesastotal , estamesa ); //mesastotal es lo definitivo
           
        console.log("probando separamesa    probando separamesa   probando separamesa");
        console.log(x); //{tomandomesa ,  lamesa }
                
        try {
          await usertable.create({
            idclient:  idclient, 
            tabclien:  x.lamesa,
            fecharsv: fechareserva,
          })
        } catch (error) {
          console.log(error);         
          return res.send(error);          
        }
        
        mesastotal= x.tomandomesa;        
  
        try {
            console.log("En el try catch de schedulePost");
             const newIput= await schedule.create({
               fecha: fechareserva,
               mesasLibres: mesastotal,               
             });
            let messagefinal="Su reservación inicia: "+fechareserva+"  por toda una hora"
            return res.json(  { message:"la reservación esta creada con exito", messagefinal} );
        } catch (error) {
            return res.send(error);
        }  
  
      } 
      if(k!=null){

         //si la reservación es posible actualiza la base de datos
        let x= separamesa( k.dataValues.mesasLibres , estamesa );
        console.log( x ); //{tomandomesa ,  lamesa }
       
        console.log("si la reservación es posible actualiza la base de datos :")
        let tomandomesa= x.tomandomesa
               
                
        try {
          await usertable.create({
            idclient:  idclient, 
            tabclien:  x.lamesa,
            fecharsv: fechareserva,
          })
        } catch (error) {
          console.log(error);         
          return res.send(error);          
        }
                
        
        try {
            console.log("En el try catch del put");
            const newIput= await schedule.update({
                fecha: fechareserva,
                mesasLibres: tomandomesa                
              }, {where: {
                fecha: fechareserva                                
              }});
              messagefinal="Su reservación inicia: "+fechareserva+"  por toda una hora"
            return res.json( { message:"la reservación esta creada con exito", messagefinal} );
        } catch (error) {
            return res.send(error);
        }  
        
      } 
    } ) 
    .catch((err) => console.log("error error error error en schedulePost  "))

}else{
  let message ="el dato fecha: "+fecha+" masa: "+estamesa+ "idclient: "+idclient+  " no es válido "
    console.log(message)
    return res.json( { message } )
}

}

module.exports = entry;

/*
fecha = Date()
2022-01-17T01:26:15.235Z
fecha.toLocaleString()
'1/16/2022, 7:26:15 PM'

*/
