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

    const storeToken = async (token) => {
        await AsyncStorage.setItem('@token');
        setToken(token);
    };

    const clearToken = async () => {
        await AsyncStorage.removeItem('@token');
        setToken('');
    };

    React.useEffect(() => {
        retrieveData();
    }, []);

    return (
        <NavigationContainer>
            <TokenContext.Provider value={{token, clearToken, storeToken}}>
                <RootNav />
            </TokenContext.Provider>
        </NavigationContainer>
    );
};

export default registerRootComponent(App);
