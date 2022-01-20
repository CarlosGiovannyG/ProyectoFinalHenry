const UsersResolvers = {

  Query: {
    LoginUsers: async (_, { input }, { dataSources }) => {
      return await dataSources.UsersApi.LoginUsers(input)
    },

    UserById: async (_, { input }, { UserAccess, dataSources }) => {

      if (input.id === UserAccess.userId) {
        return await dataSources.UsersApi.UserById(input)
      } else {
        return { message: 'Acceso no autorizado' }
      }
    },
  },


  Mutation: {
    RegisterUsers: async (_, { input }, { dataSources }) => {
      return await dataSources.UsersApi.RegisterUsers(input)
    },

    ChangePassword: async (_, { input }, { UserAccess, dataSources }) => {

      if (input.id === UserAccess.userId) {
        return await dataSources.UsersApi.ChangePassword(input)
      } else {
        return { message: 'Acceso no autorizado' }
      }

    },

    ChangeInfo: async (_, { input }, { UserAccess, dataSources }) => {

      if (input.id === UserAccess.userId) {
        return await dataSources.UsersApi.ChangeInfo(input)
      } else {
        return { blocking: 'Acceso no autorizado' }
      }

    },


  }

};

module.exports = UsersResolvers; 