const { gql } = require('apollo-server');

module.exports = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
        comments: [Comment]!
        likes: [Like]!
        likeCount: Int!
        commentCount: Int!
    }
    type Comment {
        id: ID!
        createdAt: String!
        username: String!
        body: String!
    }
    type Like {
        id: ID!
        createdAt: String!
        username: String!
    }
    type User {
        id: ID!
        username: String!
        createdAt: String!
    }
    input RegisterInput {
        username: String!
    }
    type Query {
        getPosts: [Post]
        getPost(postId: ID!): Post
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        createPost(body: String!, userId: ID!): Post!
        deletePost(postId: String! userId: String!): String!
        createComment(postId: String!, body: String!): Post!
        deleteComment(postId: String!, commentId: String!): Post!
        likePost(postId: ID!): Post!
    }
`;

// query posts{
//     getPosts {
//       id
//       body
//       createdAt
//       username
//       likes {
//         id
//         createdAt
//         username
//       }
//       comments{
//         id
//         createdAt
//         username
//         body
//       }
//     }
//   }

// query posts{
//     getPosts {
//       id
//       body
//       likeCount
//       commentCount
//     }
//   }