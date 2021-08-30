import { NavLink } from "react-router-dom";
import React from "react";
import { Menu, Segment } from 'semantic-ui-react';

import { AuthNav } from "../";

const MainNav = () => {


    return (
        <div className="main-nav">
            <Segment inverted>
                <Menu inverted secondary size="tiny">
                    <Menu.Item />
                    <NavLink
                        to="/"
                        exact
                        className="nav-link"
                        activeClassName="router-link-exact-active"
                    >
                        Home
                    </NavLink>

                    <Menu.Item />
                    <NavLink
                        to="/search"
                        exact
                        className="nav-link"
                        activeClassName="router-link-exact-active"
                    >
                        Search
                    </NavLink>

                    <Menu.Item />
                    <NavLink
                        to="/mylist"
                        exact
                        className="nav-link"
                        activeClassName="router-link-exact-active"
                    >
                        My List
                    </NavLink>

                    <Menu.Menu position="right">
                        <AuthNav />
                    </Menu.Menu>
                </Menu>
            </Segment>
        </div>
    );
}

export default MainNav;
