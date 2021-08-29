import React from "react";

const TrendingList = ({ list }) => {
    const path = `https://image.tmdb.org/t/p/w200${list.poster_path}`

    return (
        <>
            <div className="img-container">
                <img src={path} alt={list.original_title} className="trending-poster"/>
            </div>
        </>
    );
};

export default TrendingList;