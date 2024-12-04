import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { useNavigate } from "react-router";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const createReview = async ({ ratingScores, reviewComment, reposityOwnerName, repositoryName }) => {
    
    const variables = {"review": {"rating": parseInt(ratingScores), "text": reviewComment, "ownerName": reposityOwnerName, "repositoryName": repositoryName}};
    const { data } = await mutate({ variables: variables})

    if (data) {
      navigate(`/${data.createReview.repository.id}`);
    }
    
    return data;
  };

  return [createReview, result];
};

export default useCreateReview;