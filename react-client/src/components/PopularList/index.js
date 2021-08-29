import React from "react";

const PopularList = ({ list }) => {

    const path = `https://image.tmdb.org/t/p/w200${list.poster_path}`

    return (
        <>
            <div className="popular-list">
                <img src={path} alt={list.original_title} />
            </div>
        </>
    );
};

export default PopularList;