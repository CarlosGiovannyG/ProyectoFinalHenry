const lodash = require('lodash');


const productsResolvers = require('./products');
const billsResolvers = require('./bills');
const comentsResolvers = require('./comments');
const UsersResolvers = require('./users');


const resolvers = lodash.merge(
  productsResolvers,
  billsResolvers,
  comentsResolvers,
  UsersResolvers,
)
module.exports = resolvers;