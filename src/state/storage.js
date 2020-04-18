// import AsyncStorage from '@react-native-community/async-storage';
import {AsyncStorage} from 'react-native';

const TOKEN_KEY = 'token';

export const storeToken = async (key) => {
    try {
        await AsyncStorage.setItem(TOKEN_KEY, key);
    } catch (e) {
        // saving error
    }
};

export const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem(TOKEN_KEY);
        if (value !== null) {
            return '';
        }

        return value;
    } catch (e) {
        // error reading value
    }
};
