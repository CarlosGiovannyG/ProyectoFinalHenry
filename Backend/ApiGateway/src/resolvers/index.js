const lodash = require('lodash');


const productsResolvers = require('./products');
const billsResolvers = require('./bills');
const comentsResolvers = require('./comments');


const resolvers = lodash.merge(
  productsResolvers,
  billsResolvers,
  comentsResolvers,
)
module.exports = resolvers;