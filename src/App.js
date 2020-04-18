import React from 'react';
import {registerRootComponent} from 'expo';
import {NavigationContainer} from '@react-navigation/native';
import {RootNav} from './components/navigation';

import {AsyncStorage} from 'react-native';

import {TokenContext} from './state';

const App = () => {
    const [token, setToken] = React.useState('');

    const retrieveData = async () => {
        const storedToken = await AsyncStorage.getItem('@token');
        setToken(storedToken);
    };

    const storeToken = async (_token) => {
        await AsyncStorage.setItem('@token', _token);
        setToken(_token);
    };

    const clearToken = async () => {
        await AsyncStorage.removeItem('@token');
        setToken('');
    };

    React.useEffect(() => {
        retrieveData();
    }, []);

    console.log('token in app', token);

    return (
        <NavigationContainer>
            <TokenContext.Provider value={{token, clearToken, storeToken}}>
                <RootNav />
            </TokenContext.Provider>
        </NavigationContainer>
    );
};

export default registerRootComponent(App);
