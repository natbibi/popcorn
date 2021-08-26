# Hackathon: Popcorn

[![Netlify Status](https://api.netlify.com/api/v1/badges/d8953fe7-7172-4be3-9b53-57c6b6b52bab/deploy-status)](https://app.netlify.com/sites/nat-popcorn/deploys)

This project is created for the [Auth0 x Hashnode Hackathon](https://townhall.hashnode.com/auth0-hackathon?source=newsletter).

## Description 
Popcorn is a social media app for movies and tv shows using the MERNG Stack - MongoDb, Express.js, React.js, Node.js, GraphQL.

# Installation and Usage
Clone or download this repo.    
Navigate to root directory of this repository and open the terminal:   

To start up the dev server:     
`npm start`

It should load on: http://localhost:5000/

To start up the client:   
`cd react-client`   
`npm install`     
`npm start`   

It should load on: http://localhost:3000/

# Technologies
- HTML, CSS, JavaScript

### Dependencies: 
   - Server: apollo-server, graphql, mongoose
   
   - Client: react, react-router-dom, auth0-react, @apollo/client, graphql, semantic-ui-css, semantic-ui-react, moment

### DevDependencies:
   - Server: nodemon
   
   - Client: 

# Process 
1. Plan! Come up with an idea on paper, create a wireframe with MoqUps 
2. Set up server, database, and install necessary dependencies 
3. Create react front-end using `create-react-app` 
4. Create models for Posts and Users and resolvers for graphQL 
5. Connect front end to back end and connect mongoDB database to AuthO 

## Changelog

### react-client
1. Set up file structure for react-client with compnents, layout and views 
2. Install and add config for Auth0 - signup/login/logout routes and protected route 
3. Install and add config for @apollo/client dependencies - wrap ApolloProvider around App 
4. Add basic styling to layout components
5. Create three responsive columns using grid and flex for sidebar, feed and right sidebar 
6. Fetch data from apollo-client using graphQL, map, and render in Posts component  
7. WIP: Authed users can see and use CreatePost component to make a new post

### api
1. Set up apollo-server w/ express.js and config for graphQL 
2. Create cluster and database on MongoDB and connect to server 
3. Design initial schema for Post and User 
4. Add CRUD functions for creating a new user and creating / deleting posts 
5. Add create and delete for comments on Posts and likes on Posts
6. Add Like and Comment counter for posts 
7. Update schema with fields to match AuthO


## Bugs
- [ ] `new Date().toISOString()` shows the wrong UK time zone - 1 hour behind 
- [x] createPost and deletePost not working - Solved: add userID parameter
- [x] empty posts can be created - Solved: add missing validation
- [x] unable to connect to Apollo Client - Solved: CORS Policy
 
# Wins & Challenges

### Wins
- MongoDB account set up and connection went well!
- Finding a small typo after a long time 😭 

### Challenges  
- Understanding and implementing GraphQL because it's new to me!