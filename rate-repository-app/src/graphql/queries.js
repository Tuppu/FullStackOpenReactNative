import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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
        }
      }
    }
  }
`;

// other queries...