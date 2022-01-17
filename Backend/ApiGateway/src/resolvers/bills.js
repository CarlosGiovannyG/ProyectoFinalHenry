const billsResolvers = {

  Query: {
    allBills: async (_, { }, { dataSources }) => {
      return await dataSources.BillsApi.allBills()
    },

    BillsKitchen: async (_, { }, { dataSources }) => {
      return await dataSources.BillsApi.BillsKitchen()
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

    UpdateBill: async (_, { input }, { dataSources }) => {
      return await dataSources.BillsApi.UpdateBill(input)
    },

    ClosedBill: async (_, { input }, { dataSources }) => {
      return await dataSources.BillsApi.ClosedBill(input.id)
    },

    PaidBill: async (_, { input }, { dataSources }) => {
      return await dataSources.BillsApi.PaidBill(input.id)
    },

    DeleteBill: async (_, { input }, { dataSources }) => {
      return await dataSources.BillsApi.DeleteBill(input.id)
    },

  },

};

module.exports = billsResolvers;

