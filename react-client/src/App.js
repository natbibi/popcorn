import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { Loading } from "./components";
import { NavBar, Footer } from "./layout"
import { Home, Profile } from "./views";
import ProtectedRoute from "./auth/protected-route";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;