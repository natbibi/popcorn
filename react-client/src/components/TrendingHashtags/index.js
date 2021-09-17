import React from "react";
import { Link } from 'react-router-dom';

const TrendingHashtags = ({ list, loading }) => {


    const title = list.original_title || list.original_name
    const hashtagTitle = title && title.replace(/\s+/g, '');

    return (
        <>{loading ? <p>Loading..</p> :
            <p><Link>#{hashtagTitle}</Link></p>
        }
        </>
    );
};

export default TrendingHashtags;