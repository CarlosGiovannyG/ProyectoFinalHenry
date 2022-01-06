const Product = require("../models/product")
const Comment = require("../models/comment")


const ProductById = async (req, res) => {
  try {

    let produtEnv={ product:{}, comments:{} };

    const resProduto = await Product.findOne({ _id: req.params.id });

    if (resProduto) {

      resProduto.views = resProduto.views + 1;

      produtEnv.product = resProduto;

      await resProduto.save();

      const comments = await Comment.find({ product_id: resProduto._id })

      produtEnv.comments = comments;

      res.json(produtEnv);

    }

  } catch (error) {

    res.status(500).send({ message: 'Ocurrio un error inesperado', error })
  }

};

module.exports = ProductById;
