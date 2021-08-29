import React, { useEffect } from "react";
import { Switch, useLocation, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { Loading, SinglePost } from "./components";
import { NavBar, Footer, SideBar, RightSideBar } from "./layout"
import { Home, SearchPage } from "./views";
import ProtectedRoute from "./auth/protected-route";

const App = () => {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}

	function ScrollToTop() {
		const { pathname } = useLocation();

		useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);

		return null;
	}

	return (
		<>
			<NavBar />
			<main className="main-layout">
				<SideBar />
				<ScrollToTop />
				<Switch>
					<ProtectedRoute path="/" exact component={Home} />
					<ProtectedRoute exact path={`/posts/:postId`} component={SinglePost} />
					<Route exact path="/search" component={SearchPage} />
				</Switch>
				<Footer />
				<RightSideBar />
			</main>
		</>
	);
};

export default App;