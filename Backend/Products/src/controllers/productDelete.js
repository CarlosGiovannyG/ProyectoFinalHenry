const Product = require("../models/product")
const Comment = require("../models/comment")

//TODO RUTA LISTA APIGATEWAY

const ProductDelete = async (req, res) => {

  try {
    let produtEnv = { product: {}, listComments: {} }; 
    //  ({ _id: req.params.id });({ _id: id })
    const resProduto = await Product.findByIdAndDelete({ _id: req.params.id }) ; 
    if (resProduto) {    
      produtEnv.product = resProduto;     
       
      const comments = await Comment.findByIdAndDelete({ product_id: resProduto._id })
      .catch(err=>{ produtEnv.listComments = err})
      
      produtEnv.listComments = comments;
      res.json( {message:"producto borrado" } );
    } else {
      res.status(204).send({ message: 'No se encontro producto' })

    }
  } catch (error) {
    res.status(500).send({ message: 'Ocurrio un error inesperado', error })
  }
};

module.exports = ProductDelete;