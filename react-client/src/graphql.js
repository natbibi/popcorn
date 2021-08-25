import { gql } from '@apollo/client';

export const FETCH_POSTS_QUERY = gql`
query posts{
  getPosts {
    id
    body
    createdAt
    username
    likes {
      id
      createdAt
      username
    }
    comments{
      id
      createdAt
      username
      body
    }
  }
}
`;
