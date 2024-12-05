import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchQueryDebounced, {first}) => {

  const variables = { orderBy, orderDirection, 'searchKeyword': searchQueryDebounced, first };

  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network', 
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    error,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };

};

export default useRepositories;