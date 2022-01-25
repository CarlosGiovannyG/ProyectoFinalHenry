
const separamesa = (mesastotal, estamesa, c, fechareservaIn) => {
  //si existe la fecha entrada, se calcula si la 
  //realizacion de la reservación es posible  
  let lasmesas = mesastotal;
  let bandera = false, bandera2 = false;
  console.log("Se paso a separar la mesa.................   ", c);
  if (c.length > 0) {

    for (let i = 0; i < c.length; i++) {
      console.log(c[i].dataValues.mesasLibres, " ", c[i].dataValues.fechaIn);
      console.log(" en el detector de fechas ............")
      if (c[i].dataValues.fechaIn === fechareservaIn) {
        console.log(c[i].dataValues.mesasLibres);
        lasmesas = c[i].dataValues.mesasLibres;
        bandera2 = true;
      }

    }
    /** 
        return { tomandomesa: [], lamesa:"", bandera , bandera2}
       */
  }
  console.log("se calcula si la  realizacion de la reservación es posible :");
  console.log(lasmesas);
  let arraymesas = lasmesas.split(","); // strign a arry
  console.log(arraymesas);

  //toma el numero de mesa y forma un arry de mesas con su cupo de sillas
  let mesaslibres = arraymesas.map(m => { return m[5] + m[6] });
  console.log("Estas son las mesas libre en string , se deben pasar a numeros", mesaslibres);

  //se busca la mesa libre con sillas suficientes   

  let lamesa = "";
  for (let i = 0; i < arraymesas.length; i++) {
    let p = arraymesas[i][5] + arraymesas[i][6];
    p = p * 1;
    console.log("estoy buscando una mesa:  ", p);
    if (p * 1 === estamesa * 1) {
      console.log("encontre esta mesa:  ", arraymesas[i]);
      lamesa = arraymesas[i]
      //la bandera de la mesa
      bandera = true;
      break
    }
  }
  console.log("encontre esta mesa:  ", lamesa);
  //si la reservación es posible actualiza la base de datos
  console.log("si la reservación es posible actualiza la base de datos :")

  console.log(arraymesas);

  let tomandomesa = arraymesas.filter(m => {
    if (m.includes(lamesa)) { console.log(m) } else { return m }
  });

  tomandomesa.sort();

  tomandomesa = tomandomesa.toString()
  console.log("el return de separamesa   : ", { tomandomesa, lamesa, bandera: false, bandera2 });
  return { tomandomesa, lamesa, bandera, bandera2 }
}

module.exports = separamesa;