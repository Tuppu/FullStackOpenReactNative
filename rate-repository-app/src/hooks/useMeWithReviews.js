import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useMeWithReviews = () => {
  const { data, error, loading } = useQuery(GET_ME, { variables: { 'includeReviews': true } });
  return { data, error, loading };
};

export default useMeWithReviews;