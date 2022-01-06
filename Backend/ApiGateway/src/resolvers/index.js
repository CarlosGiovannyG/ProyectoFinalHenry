const lodash = require('lodash');


const productsResolvers = require('./products')
const billsResolvers = require('./bills')


const resolvers = lodash.merge(
  productsResolvers,
  billsResolvers,
)
module.exports = resolvers;