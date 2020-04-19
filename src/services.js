import axios from 'axios';
import {useState, useEffect} from 'react';

// const useGetEndpoint = (endpoint) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await axios(endpoint);
//             setTests(result.data);
//         };

//         fetchData();
//     }, []);
// };

export const instance = axios.create({
    baseURL: 'http://192.168.1.100:5000',
});

export const useGetEndpoint = (endpoint) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await instance(endpoint);
            setData(result.data);
        };

        fetchData();
    }, []);

    return data;
};

export default instance;
