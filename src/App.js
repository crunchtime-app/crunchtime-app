import React from 'react';
import {registerRootComponent} from 'expo';
import {NavigationContainer} from '@react-navigation/native';
import {AsyncStorage} from 'react-native';
import {TokenContext} from './state';

import {RootNav} from './components/navigation';
import axios from './services';

const App = () => {
    const [token, setToken] = React.useState('');

    React.useEffect(() => {
        const retrieveToken = async () => {
            const storedToken = await AsyncStorage.getItem('@token');
            setToken(storedToken);
            axios.defaults.headers.common['Authorization'] = storedToken;
        };

        retrieveToken();
    }, []);

    const storeToken = async (_token) => {
        await AsyncStorage.setItem('@token', _token);
        setToken(_token);
        axios.defaults.headers.common['Authorization'] = _token;
    };

    const clearToken = async () => {
        await AsyncStorage.removeItem('@token');
        setToken('');
    };

    return (
        <NavigationContainer>
            <TokenContext.Provider value={{token, clearToken, storeToken}}>
                <RootNav />
            </TokenContext.Provider>
        </NavigationContainer>
    );
};

export default registerRootComponent(App);
