const ProductsApi = require('./products');
const BillsApi = require('./bills');
const CommentsApi = require('./comments');
const UsersApi = require('./users');
const TablesApi = require('./tables');



const Apis = {
  ProductsApi: ProductsApi,
  BillsApi: BillsApi,
  CommentsApi: CommentsApi,
  UsersApi: UsersApi,
  TablesApi: TablesApi,
};

module.exports = Apis;