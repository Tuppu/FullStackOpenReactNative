import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage';
import { useNavigate } from "react-router";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = new AuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signIn = async ({ username, password }) => {

    const { data } = await mutate({ variables: {"username": username, "password": password}})
    
    if (data?.authenticate?.accessToken) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
      navigate('/');
    }
    
    return data;
  };

  return [signIn, result];
};

export default useSignIn;