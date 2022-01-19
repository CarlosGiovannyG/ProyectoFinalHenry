const UsersResolvers = {

  Query: {
    LoginUsers: async (_, { input }, { dataSources }) => {
      return await dataSources.UsersApi.LoginUsers(input)
    },

    UserById: async (_, { input }, { UserAccess, dataSources }) => {
      
      if (input.id === UserAccess.userId ) {
        console.log(UserAccess, 'RESOLVER');
        return await dataSources.UsersApi.UserById(input)
      }else {
        return { message:'Acceso no autorizado'}
      }
    },
  },


  Mutation: {
    RegisterUsers: async (_, { input }, { dataSources }) => {
      return await dataSources.UsersApi.RegisterUsers(input)
    },
  }

};

module.exports = UsersResolvers; 