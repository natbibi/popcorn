# Hackathon: Popcorn

[![Netlify Status](https://api.netlify.com/api/v1/badges/d8953fe7-7172-4be3-9b53-57c6b6b52bab/deploy-status)](https://app.netlify.com/sites/nat-popcorn/deploys)
⚖️ [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is created for the [Auth0 x Hashnode Hackathon](https://townhall.hashnode.com/auth0-hackathon?source=newsletter). Check out my [blog post](https://natalie.hashnode.dev/popcorn)!

![Popcorn](https://user-images.githubusercontent.com/58271566/131374759-e2abd1d4-4335-4f81-bc36-d64af0bc49d6.gif)


## Description 
Popcorn is a social media app for movies and tv shows using the MERNG Stack - MongoDb, Express.js, React.js, Node.js, GraphQL. Users can create posts and have discussions related to tv series and movies, see list of top trending hashtags, search for something to watch and add to your list.

# Installation and Usage
Clone or download this repo.    
Navigate to root directory of this repository and open the terminal:   

To start up the dev server:     
`npm start`  
`npm install` 

It should load on: http://localhost:5000/

To start up the client:   
`cd react-client`   
`npm install`     
`npm start`   

It should load on: http://localhost:3000/

# Technologies
- HTML, CSS, JavaScript

### Dependencies: 
   - Server: apollo-server, graphql, mongoose, dotenv
   
   - Client: react, react-router-dom, auth0-react, @apollo/client, graphql, semantic-ui-css, semantic-ui-react, moment, axios, react-mentions, html-react-parser

### DevDependencies:
   - Server: nodemon

# Process 
1. Plan! Come up with an idea on paper, create a wireframe with MoqUps 
2. Set up server, database, and install necessary dependencies 
3. Create react front-end using `create-react-app` 
4. Create models for Posts and Users and resolvers for graphQL 
5. Deploy frontend on to Netlify!
6. Connect front end to back end and connect mongoDB database to AuthO 
7. Set up layout and add CRUD functionality 
8. Deploy backend on to Heroku!

## Changelog

### react-client
1. Set up file structure for react-client with compnents, layout and views 
2. Install and add config for Auth0 - signup/login/logout routes and protected route 
3. Install and add config for @apollo/client dependencies - wrap ApolloProvider around App 
4. Add basic styling to layout components
5. Create three responsive columns using grid and flex for sidebar, feed and right sidebar 
6. Prepare files and config for deployment  
7. Fetch data from apollo-client using graphQL, map, and render in Posts component  
8. WIP: Authed users can see and use CreatePost component to make a new post
9. Add like post, delete post and create route match page for a single post
10. Add create comment and delete comments on a post   
11. Fetch top 10 trending movies and shows data from [themoviedb](https://www.themoviedb.org/) 
12. Show user avatar from Auth0 on the posts they created 
13. Add Search page which sorts data from [themoviedb](https://www.themoviedb.org/) by Most Popular, Best Rated and Highest Grossing
14. WIP: Mock data for trending hashtags 
15. WIP: Create MyList Page - users can add shows to a watchlist 

### api
1. Set up apollo-server w/ express.js and config for graphQL 
2. Create cluster and database on MongoDB and connect to server 
3. Design initial schema for Post and User 
4. Add CRUD functions for creating a new user and creating / deleting posts 
5. Add create and delete for comments on Posts and likes on Posts
6. Add Like and Comment counter for posts 
7. Update schema with fields to match AuthO
8. Prepare files and config for deployment '
9. Add userAvatar to Post Schema 


## Bugs
- [ ] `new Date().toISOString()` shows the wrong UK time zone - 1 hour behind 
- [x] createPost and deletePost not working - Solved: add userID parameter
- [x] empty posts can be created - Solved: add missing validation
- [x] unable to connect to Apollo Client - Solved: CORS Policy
- [x] likeCount and commentCount not showing - Solved: incorrect fetching query call 
- [x] typeDef errors - Solved: not correctly using ID! or String! 
- [x] Shows blank page if user is not logged in - Temp Solved: Protect all routes so users must be logged in 
- [x] Netlify build failing if eslint errors found - Solved: add environment variables CI=False
- [x] Links which open to another page in app doesn't open from top of new page - Solved: [Scroll Restoration](https://reactrouter.com/web/guides/scroll-restoration) 
- [x] .env variable not read in api - Solved: install dotenv dependency
- [ ] posting comment on a post will return comment by OP's instead of current user 
- [ ] likeButton ternary not functioning properly (if liking other user's posts, button doesn't change color)
 
# Wins & Challenges

### Wins
- MongoDB account set up and connection went well!
- Finding a small typo after a long time 😭 
- Deployment to Heroku and Netlify was easy process. First time deploying apollo-server but it was straightforward and well documented  

### Challenges  
- Understanding and implementing GraphQL because it's new to me! 
- Managing time to complete this project alongside my full time job and other commitments 

# Future Features
- Users can add items to their favourites / watch later list
- Sort posts by # Hashtags and show trending hashtags
- Ability to interact with movie poster -> show more details