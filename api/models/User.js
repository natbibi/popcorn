const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    createdAt: String
});

module.exports = model('User', userSchema);