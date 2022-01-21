

// por body ingresa los siguientes datos:
// muestra las reservas de la hora : "2022-01-26T09:00" 
// muestra las reservas del dia :    "2022-01-26
// muestra las reservas del cliente: idclient

//{  idclient, tabclien,  fecharsv,  }

const  db = require("../models/index");  

const metre =  async (req, res) => {

    const {idclient, tabclien,  fecharsv, } = req.body ;
    //verificar cuales datos si llegaron y cuales no

    
}

module.exports = metre;