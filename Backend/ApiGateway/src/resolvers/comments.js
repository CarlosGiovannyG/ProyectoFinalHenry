const comentsResolvers = {

  Query: {
   
    commentByProduct: async (_, { input }, { dataSources }) => {
      return await dataSources.CommentsApi.commentByProduct(input.id)
    }
  },

};

module.exports = comentsResolvers;