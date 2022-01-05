const Product = require("../models/product")
const Comment = require("../models/comment")
const md5 = require('md5');


const ProductComment = async (req, res) => {
  
 await Product.findOne({ _id: req.params.id })
 .then(prd => {
     const newComment = new Comment(req.body)
     newComment.avatar = md5(newComment.email)
   newComment.product_id = prd._id
   newComment.save();
   res.json({message: "Gracias por su comentario"})
 })  
 .catch(err => {
     res.status(500).send({message:"ocurrio un error ",err})
 })

};

module.exports = ProductComment;
