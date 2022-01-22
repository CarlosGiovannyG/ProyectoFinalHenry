const { ApolloServer } = require('apollo-server');

const serverConfig = require('./server');
const { ApolloError } = require('apollo-server-errors');

const typeDefs = require('./types');
const resolvers = require('./resolvers');
const Apis = require('./sources')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const server = new ApolloServer({
  typeDefs, resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || '';

    if (token == '') return { UserAccess: null }
    else {

      let response = await fetch(
        `${serverConfig.allUsers}/access`,
        {
          method: 'POST',
          headers: { "Authorization": token },
          redirect: 'follow'
        }
      )
      if (response.status == 200) return (await response.json())
      else throw new ApolloError((await response.json()).error, 401);
    }

  },
  dataSources: () => ({
    ProductsApi: new Apis.ProductsApi(),
    BillsApi: new Apis.BillsApi(),
    CommentsApi: new Apis.CommentsApi(),
    UsersApi: new Apis.UsersApi(),
    TablesApi: new Apis.TablesApi(),
  }),
  introspection: true,
  playground: true,
});




server.listen(process.env.PORT || 4000)
  .then(({ url }) => {
    console.log(`🚀 Servidor está corriendo en ${url}`);
  })