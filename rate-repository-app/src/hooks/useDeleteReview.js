import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    const variables = {"deleteReviewId": id};
    const { data } = await mutate({ variables: variables})

    return data;
  };

  return [deleteReview, result];
};

export default useDeleteReview;