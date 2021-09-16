import React, { useState } from "react";
import { Dropdown } from 'semantic-ui-react';

import { DropdownResultsList, Loading } from "../../components";
import { useApiRequest } from '../../requests'

const SearchPage = () => {
    const [inputData, setInputData] = useState("popularity.desc");

    const { data, loading, error } = useApiRequest(
        `https://api.themoviedb.org/3/discover/movie?&language=en-US&sort_by=${inputData}&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );

    const onChange = (e, { value }) => {
        setInputData(value);
    };

    const options = [
        {
            key: 'popularity.desc',
            text: 'Most Popular',
            value: 'popularity.desc'
        },
        {
            key: 'vote_average.desc',
            text: 'Best Rated',
            value: 'vote_average.desc'
        },
        {
            key: 'revenue.desc',
            text: 'Highest Grossing',
            value: 'revenue.desc'
        },
    ]

    return (
        <>
            {loading ? <Loading /> :
                <main className="search-container">
                    <Dropdown
                        name="input"
                        placeholder='Select View'
                        fluid
                        selection
                        options={options}
                        onChange={onChange}
                    />
                    <section className="popular-container">
                        {data && data.slice(0, 20).map((r) => (
                            <DropdownResultsList key={r.id} list={r} />
                        ))}

                        {error && <div id="error">{error}</div>}
                    </section>
                </main>
            }
        </>
    );
}

export default SearchPage;
