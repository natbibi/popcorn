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
                        to="/profile"
                        exact
                        className="nav-link"
                        activeClassName="router-link-exact-active"
                    >
                        Profile
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
