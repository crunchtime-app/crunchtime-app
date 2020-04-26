import axios from 'axios';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export const instance = axios.create({
    // baseURL: 'http://192.168.1.100:5000',
    baseURL: 'https://crunchtime-services.herokuapp.com'
});

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
