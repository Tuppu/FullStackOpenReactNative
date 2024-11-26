import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const createApolloClient = () => {
  return new ApolloClient({
    uri: `http://${Constants.expoConfig.extra.domain}:4000/graphql`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;