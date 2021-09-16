import React from "react";

import { useApiRequest } from '../../requests'
import { TrendingList } from "../../components";

const RightSideBar = () => {

    const { data, loading, error } = useApiRequest(
        "https://api.themoviedb.org/3/trending/all/day"
    );

    return (
        <> {loading ? <p>Loading...</p> :
            <aside className="sidebar-container right">
                <h3 style={{ paddingLeft: "3rem" }}>Trending Today </h3>
                <ol style={{ color: 'black' }}>
                    {data && data.slice(0, 10).map((r) => (
                        <li><TrendingList key={r.id} list={r} /></li>
                    ))}
                </ol>
                {error && <div id="error">{error}</div>}
            </aside>
        }
        </>
    );
};

export default RightSideBar;