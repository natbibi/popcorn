const Post = require('../../models/Post');

module.exports = {
    Query: {
        async getPosts() {
            try {
                console.log('looking for posts in database')
                const posts = await Post.find().sort({ createdAt: -1 });
                return posts;
            } catch (err) {
                throw new Error("What post??");
            }
        },
        async getPost(_, { postId }) {
            try {
                const post = await Post.findbyId(postId);
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
        async createPost(_, { body }) {
            const newPost = new Post({
                body,
                user: user.id,
                username: user.username,
                createdAt: new Date().toISOString()
            });
            const post = await newPost.save();
            return post;
        },
        async deletePost(_, { postId }){

            try {
                const post = await Post.findById(postId);
                if (user.username === post.username) {
                    await post.delete()
                    return "Post deleted successfully!";
                } else {
                    throw new Error("Not allowed!")
                }
            } catch(err) {
                throw new Error(err);
            }
        }
    }
};