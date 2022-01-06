const billsResolvers = {

  Query: {
    allBills: async (_, {  }, { dataSources })=>{
      return await dataSources.BillsApi.allBills()
    },

    BillsById: async (_, { input }, { dataSources }) => {
      return await dataSources.BillsApi.BillsById(input.id)
    },

    BillsByClient: async (_, { input }, { dataSources }) => {
      return await dataSources.BillsApi.BillsByClient(input.id)
    },

  },
  
  Mutation: {
    CreateBills: async (_, { input }, { dataSources }) => {
      return await dataSources.BillsApi.CreateBills(input)
    },
    
    
    DeleteBill: async (_, { input }, { dataSources }) => {
      return await dataSources.BillsApi.DeleteBill(input.id)
    },
    
  },
  
};

module.exports = billsResolvers;