const Product = require("../models/product");


module.exports = {
  async seen() {
    const products = await Product.find()
      .limit(10)
      .sort({ views: -1 })

    return products;
  }
}