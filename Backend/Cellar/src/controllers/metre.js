

// por body ingresa los siguientes datos:
// muestra las reservas de la hora : "2022-01-26T09:00" 
// muestra las reservas del dia :    "2022-01-26
// muestra las reservas del cliente: idclient

//{  idclient, tabclien,  fecharsv,  }

const  db = require("../models/index");  

let tableUser=[];

const usertable = db.usertable; 
 usertable.findAll()
 .then((c =>{
     console.log(c);
     tableUser=c;
  return  c
  })).catch((err) => { 
      console.log(err);
      return err
      })


const metre =  async (req, res) => {
/** 
const tableUser = ()=>{
     console.log("pedido a la base de datos   pedido a la base de datos   pedido a la base de datos   ")
  return usertable.findAll()
 .then((c =>{
     console.log(c);
  return  c
  })).catch((err) => { 
      console.log(err);
      return err
      })
}
*/

const todas = ()=> {
    
    console.log(tableUser);

    return  res.json(tableUser)
}

const pordia = () => {
    
    const delDia = [];

    for (let i = 0; i < tableUser.length; i++) {
        if(tableUser[i].dataValues.fecharsv === fecharsv){
            delDia.push(tableUser[i]);
        }            
    }

    return  res.json(delDia)
}






    let {idclient ="", tabclien ="",  fecharsv = "", } = req.body ;
    //verificar cuales datos si llegaron y cuales no
    let selector=0;
    if(fecharsv.length===16){
        selector=10;
        todas();
    }
    if(fecharsv.length===10){
        fecharsv = fecharsv+"T09:00" ;
        selector=20;
        console.log("desde por dia     desde por dia      desde por dia       ")
        pordia();
    }
    if(idclient.length>2){
        selector = selector + 1;
    }

    return  res.json({message: "Busqueda sin fruto con los Datos "+fecharsv });





    switch (selector) {
        case 1:
            return res.json({message: "informa todas la reservaciones de un cliente " });

        case 10:
            return res.json({message: "informa todas la reservaciones, todos los cliente " });           
           
        case 11:
            return res.json({message: "informa todas la reservaciones de un cliente " });
           
        case 20: 
            return res.json({message: "informa todas la reservaciones del dia, todos los clientes " });
            
        case 21:
            return res.json({message: "informa todas la reservaciones del dia de un cliente" });
                
        default:
            return res.json({message: "busqueda infructuosa " });
            
    }

    
}

module.exports = metre;