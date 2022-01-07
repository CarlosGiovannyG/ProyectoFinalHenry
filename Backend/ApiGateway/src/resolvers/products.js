const productsResolvers = {
  
  Query: {
    allProducts: async (_, { }, { dataSources }) => {
      return await dataSources.ProductsApi.allProducts();
    },
    
    statsApp: async (_, { }, { dataSources }) => {
      return await dataSources.ProductsApi.statsApp();
    },

    ProductById: async (_, { input }, { dataSources }) => {
      return await dataSources.ProductsApi.ProductById(input.id)
    }

  },

  Mutation: {

    ProductLike: async (_, { input }, { dataSources }) => {
      return await dataSources.ProductsApi.ProductLike(input.id)
    },
  }

  
};

module.exports = productsResolvers;