import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id = 'jaredpalmer.formik') => {

  const { data, error, loading } = useQuery(GET_REPOSITORY, { variables: {repositoryId: id}});

  return { data, error, loading };
};

export default useRepository;