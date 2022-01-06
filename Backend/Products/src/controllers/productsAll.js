const Product = require("../models/product")
const sidebar = require("../helpers/sidebar")

const allProducts = async (req, res) => {
  try {
    let produtEnv = { products: [] };
    const resProdutos = await Product.find();
    produtEnv.products = resProdutos
    produtEnv = await sidebar(produtEnv)
    res.json(produtEnv);
  } catch (error) {
    res.status(500).send({ message: 'Ocurrio un error inesperado', error })
  }
};
module.exports = allProducts;