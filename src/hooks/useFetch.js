import { useState, useEffect } from "react";

export function useFetch(uri) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!uri) return;
        const fetchData = async () => {
            await fetch(uri)
                .then((data) => data.json())
                .then(setData)
                .then(() => setLoading(false))
                .catch(setError);
        };
        fetchData();
    }, [uri]);

    return {
        loading,
        data,
        error,
    };
}
