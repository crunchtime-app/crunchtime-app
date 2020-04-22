import axios from 'axios';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export const instance = axios.create({
    baseURL: 'http://192.168.1.100:5000',
});

export const useGetEndpoint = (endpoint) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await instance.get(endpoint);
            setData(result.data);
        };

        fetchData();
    }, []);

    return [data, setData];
};

export const useApiGet = (endpoint, navigation = useNavigation()) => {
    const [data, setData] = useState([]);
    const unsubscribe = useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            const result = await instance.get(endpoint);
            setData(result.data);
        });

        return unsubscribe;
    }, [navigation]);

    return [data, setData, unsubscribe];
};

export default instance;
