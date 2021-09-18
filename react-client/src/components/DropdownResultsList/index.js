import React from "react";

const DropdownResultsList = ({ list }) => {

    const path = `https://image.tmdb.org/t/p/w200${list.poster_path}`

    return (
        <>
            <div className="popular-list">
                <img className="search-poster" src={path} alt={list.original_title} />
            </div>
        </>
    );
};

export default DropdownResultsList;