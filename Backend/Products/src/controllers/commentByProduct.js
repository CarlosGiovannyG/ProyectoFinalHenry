const Comment = require("../models/comment");

const commentByProduct = async (req, res) => {

  try {

    const wantedComentd = await Comment.find({ product_id: req.params.id }).sort({ timestamps: -1 });

    if (wantedComentd) {
      res.json({ comments: wantedComentd })
    } else {
      res.status(204).send({ message: "No se encontro producto" })
    }

  } catch (error) {
    res.status(500).send({ message: "ocurrio un error ", error })
  }

};

module.exports = commentByProduct;
