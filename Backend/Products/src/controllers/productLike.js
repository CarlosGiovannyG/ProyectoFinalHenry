const Product = require("../models/product")



const ProductLike = async (req, res) => {

  try {
    
      const resProduto = await Product.findOne({ _id:req.params.id });

      if(resProduto){
          resProduto.rating = resProduto.rating+1
          await resProduto.save();
          res.json({rating:resProduto.rating})
      }
    
  } catch (error) {

    res.status(500).send({ message: 'Ocurrio un error inesperado', error })
  }

};

module.exports = ProductLike;