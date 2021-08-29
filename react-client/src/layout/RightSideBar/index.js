import React, { useState, useEffect } from "react";
import axios from 'axios';



const RightSideBar = () => {
    const [trendingData, setTrendingData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
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
            } catch {
                console.warn("There's an error!!! Cannot fetch data!")
                setError('❌ Error loading list')
            }
        } fetchTrending();
    }, []);

    return (
        <>
            <aside className="sidebar-container right">
                <h3>Trending Today </h3>
              
            </aside>
        </>
    );
};

export default RightSideBar;