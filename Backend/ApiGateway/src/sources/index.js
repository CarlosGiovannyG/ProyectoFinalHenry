const ProductsApi = require('./products');
const BillsApi = require('./bills');
const CommentsApi = require('./comments');

const Apis = {
  ProductsApi: ProductsApi,
  BillsApi: BillsApi,
  CommentsApi: CommentsApi,

};

module.exports = Apis;