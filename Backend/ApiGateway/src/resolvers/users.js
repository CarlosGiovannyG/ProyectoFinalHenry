// UsersApi

const UsersResolvers = {

  Mutation: {

    RegisterUsers: async (_, { input }, { dataSources }) => {
      return await dataSources.UsersApi.RegisterUsers(input)
    },
  }

};

module.exports = UsersResolvers;