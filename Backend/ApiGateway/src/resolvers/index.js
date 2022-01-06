const lodash = require('lodash');


const productsResolvers = require('../resolvers/products')


const resolvers = lodash.merge(
  productsResolvers,
)
module.exports = resolvers;