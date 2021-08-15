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
    
};