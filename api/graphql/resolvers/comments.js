const { UserInputError } = require('apollo-server')

const Post = require('../../models/Post');

module.exports = {
    Mutation: {
        createComment: async (_, { postId, body }, ) => {
            if (body.trim() === '') {
                throw new UserInputError('Empty Comment', {
                    errors: {
                        body: 'No text in comment??'
                    }
                })
            }
            const post = await Post.findById(postId);
            if (post) {
                post.comments.unshift({
                    body,
                    username: post.username,
                    createdAt: new Date().toISOString()
                })
                await post.save();
                return post;
            } else throw new UserInputError('Post not found');
        }
    }
}

// mutation comment {
//     createComment(postId:"6117e1b8ca416a5e17e8987a" body: "This is a first comment on a post!"){
//       id
//       body
//       comments{
//         id
//         createdAt
//         username
//         body
//       }
//     }
//   }