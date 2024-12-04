import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          id
          language
          description
          forksCount
          stargazersCount
          reviewCount
          ratingAverage
          fullName
          ownerAvatarUrl
          createdAt
        }
      }
    }
  }
`;

export const GET_ME = gql`
query Me {
  me {
    username
    id
  }
}
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      language
      description
      forksCount
      stargazersCount
      reviewCount
      ratingAverage
      fullName
      ownerAvatarUrl
      url
      
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;