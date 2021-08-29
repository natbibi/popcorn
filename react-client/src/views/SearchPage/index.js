import React, { useState, useEffect } from "react";
import { Dropdown } from 'semantic-ui-react';
import axios from 'axios';

import { PopularList } from "../../components";

const SearchPage = () => {
    const [inputData, setInputData] = useState("popularity.desc");
    const [error, setError] = useState();
    const [searchResults, setSearchResults] = useState([]);
   
    // const onChange = (e) => {
    //     setInputData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    //     console.log(setInputData)
    // };

    console.log(inputData)

    const options = [
        {
            key: 'popularity.desc',
            text: 'Most Popular',
            value: 'popularity.desc'
        },
        {
            key: 'popularity.asc',
            text: 'Least Popular',
            value: 'popularity.asc'
        },
    ]


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
                const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?&language=en-US&sort_by=${inputData}&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`, options)
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
    }, [inputData]);


    return (
        <>
            <main className="search-container">
                {/* <Search
                    name="input"
                    onSearchChange={onSearchChange}
                    onSubmit={onSubmit}
                    value={inputData.input} 
                />  */}

                <Dropdown
                    name="input"
                    placeholder='Select View'
                    fluid
                    selection
                    options={options}
                    onSelect={(e, { value }) => setInputData(value)}
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
