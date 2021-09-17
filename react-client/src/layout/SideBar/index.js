import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Profile, TrendingHashtags } from '../../components'
import { useApiRequest } from '../../requests'

const SideBar = () => {
    const { user } = useAuth0();

    const { data, loading, error } = useApiRequest(
        "https://api.themoviedb.org/3/trending/all/day"
    );

    const hashtagList = data && data.slice(0, 10).map((r) => (
        <TrendingHashtags key={r.id} list={r} loading={loading} />
    ))

    return (
        <>
            {loading ? <p>Loading</p> :
                <aside className="sidebar-container">
                    <div className="left-wrapper">
                    {user ?
                        <Profile /> : <p>Please Wait...</p>
                    }
                
                    <div className="hashtag-container">
                        <h4>Trending Hashtags</h4>
                        <p>{hashtagList}</p>
                    </div>
                    {error && <div id="error">{error}</div>}
                    </div>
                </aside>
            }
        </>
    );
};

export default SideBar;