import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation ($username: String!, $password: String!){
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
mutation CreateReview($review: CreateReviewInput) {
  createReview(review: $review) {
    id
    createdAt
    text
    rating
    userId
    repository {
      id
      ownerName
      name
      createdAt
    }
    repositoryId
    user {
      id
      username
      createdAt
      reviewCount
    }
  }
}
`;

export const CREATE_USER = gql`
mutation CreateUser($user: CreateUserInput) {
  createUser(user: $user) {
    createdAt
    id
    username
  }
}
`;