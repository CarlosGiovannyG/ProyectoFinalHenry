const productsResolvers = {
  
  Query: {
    allProducts: async (_, { }, { dataSources }) => {
      const res = await dataSources.ProductsApi.allProducts();
      console.log('RESOLVERS', res);
      return await dataSources.ProductsApi.allProducts();
    },

  },

  
};

module.exports = productsResolvers;