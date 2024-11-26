import { ApolloClient, InMemoryCache } from '@apollo/client';


const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://1.1.1.1:4000/graphql',
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;