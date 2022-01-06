import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';



const httpLink = new HttpLink({ uri: 'http://localhost:4000' });


const client = new ApolloClient({

  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: httpLink,
});


export default client;