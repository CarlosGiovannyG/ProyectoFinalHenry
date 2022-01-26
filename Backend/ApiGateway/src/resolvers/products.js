const productsResolvers = {

  Query: {
    allProducts: async (_, { }, { dataSources }) => {
      return await dataSources.ProductsApi.allProducts();
    },

    statsApp: async (_, { }, { dataSources }) => {
      return await dataSources.ProductsApi.statsApp();
    },

    ProductsBills: async (_, { }, { dataSources }) => {
      return await dataSources.ProductsApi.ProductsBills();
    },

    ProductById: async (_, { input }, { dataSources }) => {
      return await dataSources.ProductsApi.ProductById(input.id)
    }

  },

  Mutation: {

    ProductLike: async (_, { input }, { dataSources }) => {
      return await dataSources.ProductsApi.ProductLike(input.id)
    },

    createComment: async (_, { input }, { dataSources }) => {
      return await dataSources.ProductsApi.createComment(input)
    },

    DeleteProduct: async (_, { input }, { UserAccess, dataSources }) => {
      if (UserAccess.rool === 'admin') {
        return await dataSources.ProductsApi.DeleteProduct(input.id)
      } else {
        return { blocking: 'Acceso no autorizado' }
      }
    },
  }

  

};

module.exports = productsResolvers;