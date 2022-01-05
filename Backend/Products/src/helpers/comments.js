const Product = require("../models/product");
const Comment = require("../models/comment");

module.exports = {

  async newets() {

    const comments = await Comment.find()
      .limit(10)
      .sort({ timestamps: -1 });

    for (const comment of comments) {

      const product = Product.findOne({ _id: comment.product_id });

      comment.product = product;

    }

    return comments;

  }

};