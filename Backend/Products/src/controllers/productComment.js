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
      newComment.product_id = wantedProduct._id;
      newComment.save();
      res.json({ message: "Gracias por su comentario" })
    }
  } catch (error) {
    res.status(500).send({ message: "ocurrio un error ", error })
  }

};

module.exports = ProductComment;
