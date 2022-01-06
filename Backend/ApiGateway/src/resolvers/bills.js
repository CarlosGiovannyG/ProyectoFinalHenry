const billsResolvers = {

  Query: {
    allBills: async (_, {  }, { dataSources })=>{
      return await dataSources.BillsApi.allBills()
    },

    BillsById: async (_, { input }, { dataSources }) => {
      let resp = await dataSources.BillsApi.BillsById(input.id)
      console.log('RESOLVERS' ,resp.productos);
      return await dataSources.BillsApi.BillsById(input.id)
    }
  },


};

module.exports = billsResolvers;