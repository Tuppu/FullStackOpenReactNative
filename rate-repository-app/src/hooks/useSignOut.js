import { useQuery, useApolloClient } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import AuthStorage from '../utils/authStorage';

const useSignOut = () => {

  const authStorage = new AuthStorage();
  const apolloClient = useApolloClient();

  const { data, error, loading } = useQuery(GET_ME);
  if (data) {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return { data, error, loading };
};

export default useSignOut;