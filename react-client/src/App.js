import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { Loading, SinglePost } from "./components";
import { NavBar, Footer, SideBar, RightSideBar } from "./layout"
import { Home, Profile } from "./views";
import ProtectedRoute from "./auth/protected-route";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <main className="main-layout">
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route exact path={`/posts/:postId`} component={SinglePost} />
        </Switch>
        <Footer />
        <RightSideBar />
      </main>
    </>
  );
};

export default App;