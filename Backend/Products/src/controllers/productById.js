const Product = require("../models/product")
const Comment = require("../models/comment")

//TODO RUTA LISTA APIGATEWAY

const ProductById = async (req, res) => {

  try {
    let produtEnv = { product: {}, listComments: {} };
    const resProduto = await Product.findOne({ _id: req.params.id });
    if (resProduto) {
      resProduto.views = resProduto.views + 1;
      produtEnv.product = resProduto;
      await resProduto.save();
      const comments = await Comment.find({ product_id: resProduto._id })
      produtEnv.listComments = comments;
      res.json(produtEnv);
    } else {
      res.status(204).send({ message: 'No se encontro producto' })

    }
  } catch (error) {
    res.status(500).send({ message: 'Ocurrio un error inesperado', error })
  }
};

module.exports = ProductById;