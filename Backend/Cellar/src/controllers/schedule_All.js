const { format } = require("express/lib/response");
const db = require("../models/index");
const schedule_all = (req, res) => {

  let fecha = [];

  const schedule = db.schedule;
  return schedule.findAll()
    .then((c => {
      fecha = c.map(d => {
        
        let mesaslibres = d.mesasLibres

        let arraymesas = mesaslibres.split(",");  

        arraymesas.sort();

        let arrmesas = [];

        for (let i = 0; i < arraymesas.length; i++) {
          let mesa = arraymesas[i][5] + arraymesas[i][6];
          mesa = mesa * 1;
          let cap = arraymesas[i][8];
          cap = cap * 1;
          arrmesas.push({ mesa, cap })
        }
        return { fechaIn: d.fechaIn, fechaOut: d.fechaOut, arrmesas }
      })

      return res.json(fecha)

    })).catch((err) => {
      
      return res.json({ message: "error  error error  error error  error", err })
    })
}

module.exports = schedule_all;