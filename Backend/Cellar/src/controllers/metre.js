

// por body ingresa los siguientes datos:
// muestra las reservas de la hora : "2022-01-26T09:00" 
// muestra las reservas del dia :    "2022-01-26
// muestra las reservas del cliente: idclient

//{  idclient, tabclien,  fecharsv,  }

const  db = require("../models/index");  
const usertable = db.usertable; 

const metre =  (req, res) => {
    let fecha = "f"   
    let cases= 0 ;

    let { idclient , fecharsv  } = req.body ;
    if(fecharsv) fecha = fecharsv ;
       
    if(fecha.length===16){
       cases = 10;
       console.log( "Todas las fechas y los clientes" ,fecha);
    }
    if(fecha.length===10){
        cases= 20 ;
        console.log( "Las fechas y los clientes de todo un día" ,fecha);
    }
    if(idclient){
        cases = cases + 1;
        console.log( "filtra los anteriores por cliente" ,fecha," ",idclient);
    }
    console.log("el valor del caso :", cases)
    

    /* */
    return usertable.findAll()
    .then((c =>{ 
        let mesas=[], hora=[];

    switch (cases) {

        case 1:
          
           c.map(k=>  {
               console.log("sacar reservas de un cliente",k.dataValues.idclient);
               if(k.dataValues.idclient == idclient) mesas.push(k.dataValues)
           })
           console.log(mesas)
        return  res.json({message: "todas Las reservas de un cliente ",mesas});  

        case 10 :
         mesas=[];
        c.map(k=>  {
            console.log("Todos los clienteslas de la fechas y hora ",k.dataValues.idclient);
            if(k.dataValues.fecharsv === fecharsv) mesas.push(k.dataValues)            
        })
        return  res.json({message: "Todos los clienteslas de la fechas y hora",mesas});

        case 11:
            mesas=[];
        c.map(k=>  {
            console.log("las de un cliente en una fecha y hora",k.dataValues.idclient);
            if(k.dataValues.fecharsv == fecharsv) mesas.push(k.dataValues);
        })        
        mesas.map(k=>{
            if(k.idclient == idclient) hora.push(k);
        })
        console.log(mesas)
        return  res.json({message: "las de un cliente en una fecha y hora", hora });

        case 20:
            mesas=[];
        c.map(k=>  {
            console.log("Las reservas de todos los clientes de todo un día",k.dataValues.fecharsv.slice(0, -6));
            if(k.dataValues.fecharsv.slice(0, -6) == fecharsv) mesas.push(k.dataValues);
        })
        return  res.json({message: "Las reservas de todos los clientes de todo un día",mesas});

        case 21:
            mesas=[];
            hora=[];
        c.map(k=>  {
            console.log("Las reservas de todos los clientes de todo un día",k.dataValues.fecharsv.slice(0, -6));
            if(k.dataValues.fecharsv.slice(0, -6) == fecharsv) mesas.push(k.dataValues);
        })
        mesas.map(k=>{
            if(k.idclient == idclient) hora.push(k);
        })
        return  res.json({message: "Las reservas  de un dia de un cliente ", hora });
   
        default:
        return  res.json({message: "Busqueda sin fruto con los Datos "+fecharsv });
   }

})).catch((err) => { 
    console.log(err);
    return res.send(err)
    })   
    
}

module.exports = metre;