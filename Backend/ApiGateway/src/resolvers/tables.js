const tablesResolvers = {

  Query: {
    FreeTables: async (_, {input }, { dataSources }) => {
      return await dataSources.TablesApi.FreeTables(input);
    },
  },
  
    
  Mutation: {

    BookTable: async (_, { input }, { dataSources }) => {
      return await dataSources.TablesApi.BookTable(input)
    },

    
  }

};

module.exports = tablesResolvers;