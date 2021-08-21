# Hackathon: Popcorn

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
   
   - Client: react, react-router-dom, auth0-react

### DevDependencies:
   - Server: nodemon
   
   - Client: 

# Process 
1. Plan! Come up with an idea on paper, create a wireframe with MoqUps 
2. Set up server, database, and install necessary dependencies 
3. Create react front-end using `create-react-app` 
4. Create models for Posts and Users and resolvers for graphQL 


## Changelog

### react-client
1. Set up file structure for react-client with compnents, layout and views 
2. Install and add config for Auth0 - signup/login/logout routes and protected route 

### api
1. Set up apollo-server w/ express.js and config for graphQL 
2. Create cluster and database on MongoDB and connect to server 
3. Design initial schema for Post and User 
4. Add CRUD functions for creating a new user and creating / deleting posts 
5. Add create and delete for comments on Posts and likes on Posts


## Bugs
- [ ] `new Date().toISOString()` shows the wrong UK time zone - 1 hour behind 
- [x] createPost and deletePost not working - Solved: add userID parameter
 
# Wins & Challenges

### Wins
- MongoDB account set up and connection went well!
- Finding a small typo after a long time 😭 

### Challenges  
- Understanding and implementing GraphQL because it's new to me!
