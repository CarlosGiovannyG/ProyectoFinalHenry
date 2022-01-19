const productsTypes = require('./products');
const bilssTypes = require('./bills');
const commentsTypes = require('./comments');
const usersTypes = require('./users');



const schemasArrays = [
  productsTypes,
  bilssTypes,
  commentsTypes,
  usersTypes,
];

module.exports = schemasArrays;