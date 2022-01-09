const Comment = require("../models/comment");

const commentByProduct = async (req, res) => {

  try {
    
    const wantedComentd = await Comment.find({product_id:req.params.id})
   
    res.json({comments: wantedComentd})
   
  } catch (error) {
    res.status(500).send({ message: "ocurrio un error ", error })
  }

};

module.exports = commentByProduct;
