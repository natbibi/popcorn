const { gql } = require('apollo-server');

module.exports = gql`
    type Post {
        id: ID!
        body: String!
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
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
    }
`;