const  db = require("../models/index");

const mesaById = async (req, res) => {

  const mesa= db.mesa;
  let numero=0;

  console.log("cuando envia por parametros:  ",  req.params.numero );
  console.log("cuando envia por body:  ",  req.body.numero );

  if(req.params.numero){
    numero = req.params.numero;
  }else numero= req.body.numero;
  numero= numero*1;
  console.log("type de numero en la entrada  ",numero);
  if(!numero)return res.json({
    message: "Esto es la entrada  "+ numero +" verificar por body {numero: x} ó por parametros /id/:x"
  })
 
  return  mesa.findByPk(numero)
  .then((c) => { 
   console.log("miremos el findByPk: ",c);
     if (c) {
        return res.status(200).json(c)
    }    
    return res.json({
      message: "el numero no existe, puede enviar el numero por body {numero: x} ó por parametros /id/:x"})
  })
    .catch((err) => { 
      console.log("err err err err err err err err  ");
      return res.send(err)
    }) 

  
}

module.exports = mesaById;