const verificacion = require("./verificacion");
const separamesa = require("./separamesa");
const  db = require("../models/index");  

      
const entry = async (req, res) => {
     
    const schedule= db.schedule;    
    const mesa= db.mesa;     
    const usertable= db.usertable;
    const { fechaIn, fechaOut, estamesa , idclient}= req.body ;    
     
    let mesastotal=[];
    if(!fechaIn || !fechaOut || !estamesa || !idclient) return res.json( {
       message:"revisar datos ",fechaIn, fechaOut, estamesa , idclient 
      } );
    
try {
   mesastotal= await mesa.findAll()
} catch (error) {
   return {message:" error error ", error}
}
 
mesastotal = mesastotal.map(m=>{
   
  let numero = m.dataValues.numero.toString()
  let capacidad = m.dataValues.capacidad.toString()
  return "mesa:"+ numero+"C" + capacidad 
})
  
  mesastotal.sort();
  mesastotal=mesastotal.toString();   
   
  let fecha = fechaIn;
  let verif =  verificacion({ fecha, estamesa , idclient }) ;

  let fechareservaIn = verif.fechareserva;
 
  fecha = fechaOut;
  verif =  verificacion({ fecha, estamesa , idclient }) ;
  let fechareservaOut = verif.fechareserva; 

if( verif.bandera1 && verif.bandera2 && verif.bandera3){

  return schedule.findAll()
  .then( async (c)=>{
     
    let x= separamesa( mesastotal , estamesa , c, fechareservaIn);  
     
    if(!x.bandera)return res.json(  { 
      message:"la reservación no es posible", x} );
    
    mesastotal= x.tomandomesa;      

    if (x.bandera2) {      
       
    try {        
      const newIput= await schedule.update({
        fechaIn: fechareservaIn,
        fechaOut: fechareservaOut,
         mesasLibres: mesastotal,              
      }, {where: {
        fechaIn: fechareservaIn                               
      }});        

      try {
       await usertable.create({
         idclient:  idclient, 
         tabclien:  x.lamesa,
         fecharsvIn: fechareservaIn,
         fecharsvOut: fechareservaOut
       })
     } catch (error) {
            
       return res.send(error);          
     }


     let messagefinal="Desde: "+fechareservaIn+"  Hasta:  "+fechareservaOut
     return res.json(  { message:"la reservación fue creada con exito", messagefinal} );
   } catch (error) {
     
       return res.send(error);
     }  
      
    } else {
          
    try {      
       const newIput= await schedule.create({      
        fechaIn: fechareservaIn,
        fechaOut: fechareservaOut,
         mesasLibres: mesastotal,               
       });

       try {
        await usertable.create({
          idclient:  idclient, 
          tabclien:  x.lamesa,
          fecharsvIn: fechareservaIn,
          fecharsvOut: fechareservaOut
        })
      } catch (error) {
               
        return res.send(error);          
      }


      let messagefinal="Desde: "+fechareservaIn+"  Hasta:  "+fechareservaOut
      return res.json(  { message:"la reservación fue creada con exito", messagefinal} );
    } catch (error) {
      
        return res.send(error);
      }    

    }
  })



}else{
 
}


return res.json( { message:" ja aja ja ja ja " } )
}

module.exports = entry;

