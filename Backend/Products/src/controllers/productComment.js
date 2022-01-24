const Product = require("../models/product")
const Comment = require("../models/comment")
const md5 = require('md5');


const ProductComment = async (req, res) => {

  try {
    const wantedProduct = await Product.findOne({ _id: req.params.id })
    if (wantedProduct) {
      wantedProduct.comments = wantedProduct.comments + 1;
      await wantedProduct.save();
      const newComment = new Comment(req.body);
      newComment.avatar = md5(newComment.email);
      newComment.save();
      res.status(201).send({ message: "Gracias por su comentario" })
    } else {
      res.status(204).send({ message: "No se encontro producto" })
    }
  } catch (error) {
    res.status(500).send({ message: "ocurrio un error ", error })
  }

};

module.exports = ProductComment;
