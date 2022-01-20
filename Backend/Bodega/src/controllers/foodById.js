const  db = require("../models/index");

const foodById = async (req, res) => {

  const aliment= db.aliment;

  console.log("Este es el elemento a la bodega con id tal", req.params.id)
 
  aliment.findAll().then(k=> {
    let arry= k.filter(m=>m.id===req.params.id);
    
    if(arry.length===0){
      return res.json( {menss:"ID inexistente  ji ji ji ja"} ) 
    }else return   aliment.findByPk(req.params.id)
                  .then((c) => { return res.status(200).json(c)})
                  .catch((err) => { 
                    console.log("err err err err err err err err  ", err);
                    return res.send(err)
                  })          
  } );  
  
}

module.exports = foodById;