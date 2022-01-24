const db = require("../models/index");
const verificacion = require("./verificacion");
 
const scheduleByFecha = async (req, res) => {

  const schedule = db.schedule;
  let fecha = "";  
   
  if (req.params.fecha.length === 16) {
    fecha = req.params.fecha;
  } else {
    if (req.body.fecha && true) {
      if (req.body.fecha.length === 16) { fecha = req.body.fecha; }
      else return res.json({ message: "el dato ingresado no es válido" })
    } else return res.json({ message: "el dato ingresado no es válido" })
  }

  let verif = verificacion({ fecha })   

  if (verif.bandera2 && verif.bandera3) {

    fechareserva = verif.fechareserva
    return schedule.findByPk(fechareserva)
      .then((k) => {
        if (k === null) {
           
          const mesa = db.mesa;          
           
          return mesa.findAll()
            .then((c => {
               
              let arrmesas = c.map(m => {
                 
                let numero = m.dataValues.numero.toString()
                let capacidad = m.dataValues.capacidad.toString()
                return { mesa: numero, cap: capacidad }  

              })   
              arrmesas.sort()

              return res.json({
                message: "En esta fecha todas las mesas entan libres entan libres",
                arrmesas
              });

            })).catch((err) => {
               
              return res.send(err)
            })
        }
        if (k != null) {           

          let fecha = k.dataValues.fecha, mesas = k.dataValues.mesasLibres, sillas = k.dataValues.sillasLibres;

          let stringarraymesas = mesas.split(","); 
          stringarraymesas.sort();
          

          let arrmesas = [];

          for (let i = 0; i < stringarraymesas.length; i++) {
            let mesa = stringarraymesas[i][5] + stringarraymesas[i][6];
            mesa = mesa * 1;
            let cap = stringarraymesas[i][8];
            cap = cap * 1;
            arrmesas.push({ mesa, cap })
            
          }
          

          return res.json({ message: "estos son las mesas disponibles", arrmesas });

        }
      })
      .catch((err) =>  res.json({ message: "estos son las mesas disponibles", err }))
  } else {
    
    return res.json({ message: "el dato ingresado no es válido" })
  }

}

module.exports = scheduleByFecha;