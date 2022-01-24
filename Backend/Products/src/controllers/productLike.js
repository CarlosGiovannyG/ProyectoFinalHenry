const Product = require("../models/product")


//TODO RUTA LISTA APIGATEWAY

const ProductLike = async (req, res) => {

  try {

    const resProduto = await Product.findOne({ _id: req.params.id });

    if (resProduto) {
      resProduto.rating = resProduto.rating + 1
      await resProduto.save();
      res.json({ rating: resProduto.rating })
    } else {
      res.status(204).send({ message: "No se encontro producto" })
    }

  } catch (error) {

    res.status(500).send({ message: 'Ocurrio un error inesperado', error })
  }

};

module.exports = ProductLike;
