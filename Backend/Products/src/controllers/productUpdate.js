const Product = require("../models/product")
const fs = require("fs-extra");


const update = async (req, res) => {

  console.log("entrando pa actualizar");

  try {      
      

      const updateProdut = await Product.findOne({ _id: req.params.id });  //req.params.id
      
      // actualizando los datos enviados por body 
      if(req.body.name && true) updateProdut.name = req.body.name ;
      if(req.body.description && true) updateProdut.description = req.body.description ;
      if(req.body.category && true) updateProdut.category = req.body.category ;
      if(req.body.price && true) updateProdut.price = req.body.price ;
      if(req.body.name && true) updateProdut.name = req.body.name ;

      
      await updateProdut.save();

      console.log("actualizando**********", updateProdut);


      res.json({ mmessages: 'Producto actualizado con exito  ' })
    
  } catch (error) {

    console.log('Rafa  Rafa   Rafa  Rafa  Rafa  Rafa',error);

    res.status(500).send({ message: 'Ocurrio un error inesperado', error})

  }
  
};

module.exports = update;


