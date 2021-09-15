import React, { useState, useEffect } from "react";
import axios from 'axios';

import { TrendingList } from "../../components";

const RightSideBar = () => {
    const [trendingData, setTrendingData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetchTrending() {
            try {
                const token = process.env.REACT_APP_TOKEN;
                const options = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": `application/json;charset=utf-8`
                    }
                };
                const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day`, options)
                if (data.err) {
                    throw new Error(data.err)
                }
                setTrendingData(data.results)
                setLoading(false);
            } catch {
                console.warn("There's an error!!! Cannot fetch data!")
                setError('Oops, please try again!')
                setLoading(false);
            }
        } fetchTrending();
    }, []);

    return (
        <> {loading ? <p>Loading...</p> :
            <aside className="sidebar-container right">
                <h3 style={{ paddingLeft: "3rem" }}>Trending Today </h3>
                <ol style={{ color: 'black' }}>
                    {trendingData && trendingData.slice(0, 10).map((r) => (
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