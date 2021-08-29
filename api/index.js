const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
		origin: '*',
		credentials: true
    },
});

const connectionUrl = process.env.MONGODB || MONGODB

mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: process.env.PORT || 5000 });
    })
    // Running on express via Apollo Server
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })