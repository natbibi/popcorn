import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from './App';

const client = new ApolloClient({
  uri: 'https://nat-popcorn.herokuapp.com/',
  cache: new InMemoryCache(),
  connectToDevTools: true
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);