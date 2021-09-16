import { useEffect, useState } from "react";
import axios from 'axios';

export const useApiRequest = url => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

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
                const { data } = await axios.get(url, options)
                if (data.err) {
                    throw new Error(data.err)
                }
                setData(data.results)
                setLoading(false);
            } catch {
                console.warn("There's an error!!! Cannot fetch data!")
                setError('Oops, please try again!')
                setLoading(false);
            }
        } fetchTrending();
    }, [url]);

    return { data, loading, error };
}