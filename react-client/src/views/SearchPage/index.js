import React, { useState, useEffect } from "react";
import { Search } from 'semantic-ui-react';
import axios from 'axios';

import { PopularList } from "../../components";

const SearchPage = () => {
    const [inputData, setInputData] = useState({ input: "" });
    const [error, setError] = useState();
    const [searchResults, setSearchResults] = useState();

    const onSearchChange = (e) => {
        setInputData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        async function fetchPopular() {
            try {
                const token = process.env.REACT_APP_TOKEN;
                const options = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": `application/json;charset=utf-8`
                    }
                };
                const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`, options)
                if (data.err) {
                    throw new Error(data.err)
                }
                console.log(data.results)
                setSearchResults(data.results)
            } catch {
                console.warn("There's an error!!! Cannot fetch data!")
                setError('Oops, please try again!')
            }
        } fetchPopular();
    }, []);


    return (
        <>
            <main className="search-container">
                <Search
                    name="input"
                    onSearchChange={onSearchChange}
                    // onSubmit={onSubmit}
                    value={inputData.input}
                />
                <h3>Popular</h3>
                <section className="popular-container">
                    {searchResults && searchResults.slice(0, 20).map((r) => (
                        <PopularList key={r.id} list={r} />
                    ))}

                    {error && <div id="error">{error}</div>}
                </section>
            </main>
        </>
    );
}

export default SearchPage;
