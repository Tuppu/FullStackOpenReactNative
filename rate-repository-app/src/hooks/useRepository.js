import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id, {first}) => {

  const variables = {repositoryId: id, first };

  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, { fetchPolicy: 'cache-and-network',
     variables: variables
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repository: data?.repository,
    error,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };

};

export default useRepository;