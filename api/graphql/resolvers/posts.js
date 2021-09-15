const { UserInputError } = require('apollo-server');

const Post = require('../../models/Post');
const User = require('../../models/User')

module.exports = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find().sort({ createdAt: -1 });
                return posts;
            } catch (err) {
                throw new Error("What post??");
            }
        },
        async getPost(_, { postId }) {
            try {
                const post = await Post.findById(postId);
                if (post) {
                    return post;
                } else {
                    throw new Error('Post not found :(')
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createPost(_, { userId, body, userAvatar }) {
            const user = await User.findById(userId)

            if (body.trim() === '') {
                throw new UserInputError('Empty Post')
            }

            if (user) {
                const newPost = new Post({
                    body,
                    userAvatar,
                    user: user.id,
                    username: user.username,
                    createdAt: new Date().toISOString()
                });
                const post = await newPost.save();
                return post;
            } else {
                throw new UserInputError('Sorry..... try again!')
        
            }
    },
    async deletePost(_, { postId, userId }) {
        const user = await User.findById(userId)

        try {
            const post = await Post.findById(postId);
            if (user.username === post.username) {
                await post.delete()
                return "Post deleted successfully!";
            } else {
                throw new Error("Not allowed!")
            }
        } catch (err) {
            throw new Error(err);
        }
    },
    async likePost(_, { userId, postId }) {
        const user = await User.findById(userId)
        const post = await Post.findById(postId)

        if (post) {
            const username = user.username
            if (post.likes.find((like) => like.username === username)) {
                console.log('olaaa')
                post.likes = post.likes.filter((like) => like.username !== username);
                console.log('hi')
            } else {
                post.likes.push({
                    username,
                    createdAt: new Date().toISOString()
                })
                console.log('bye')
            }
            await post.save();
            return post;
        } else {
            throw new UserInputError('Post not found :(')
        }
    }
}
};

// mutation {
//     createPost(userId: "61196045ef43c54666c1850e" body: "Lalala post post whooooppp") {
//       id
//       body
//     }
//   }

// mutation($deletePostPostId: ID!) {
//     deletePost(postId: "6120f78be8b38a7dc6535dbb" userId: "61196045ef43c54666c1850e")
//   }