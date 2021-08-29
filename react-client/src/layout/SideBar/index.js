import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Profile } from '../../components'

const SideBar = () => {
    const { user } = useAuth0();

    return (
        <>
            <aside className="sidebar-container">
                {user ?
                    <Profile /> : <p>Please Wait...</p>
                }
            </aside>
        </>
    );
};

export default SideBar;