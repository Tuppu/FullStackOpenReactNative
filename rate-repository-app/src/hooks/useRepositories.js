import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchQueryDebounced = '') => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network', 
    variables: { 'orderBy': orderBy, 'orderDirection': orderDirection, 'searchKeyword': searchQueryDebounced }});
  return { data, error, loading };
};

export default useRepositories;