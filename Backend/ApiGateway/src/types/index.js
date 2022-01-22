const productsTypes = require('./products');
const bilssTypes = require('./bills');
const commentsTypes = require('./comments');
const usersTypes = require('./users');
const tablesTypes = require('./tables');



const schemasArrays = [
  productsTypes,
  bilssTypes,
  commentsTypes,
  usersTypes,
  tablesTypes,
];

module.exports = schemasArrays;