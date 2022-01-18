const ProductsApi = require('./products');
const BillsApi = require('./bills');
const CommentsApi = require('./comments');
const UsersApi = require('./users');

const Apis = {
  ProductsApi: ProductsApi,
  BillsApi: BillsApi,
  CommentsApi: CommentsApi,
  UsersApi: UsersApi,

};

module.exports = Apis;