import React from 'react';
import {registerRootComponent} from 'expo';
import {NavigationContainer} from '@react-navigation/native';
import {RootNav} from './components/navigation';

import {AsyncStorage} from 'react-native';

import {TokenContext} from './state';

const App = () => {

    const [token, setToken] = React.useState('');

    const retrieveData = async () => {
        const storedToken = await AsyncStorage.getItem('token');
        console.log(storedToken);
        setToken(storedToken);

        return;
    };

    React.useEffect(() => {
        retrieveData();
    }, []);

    return (
        <NavigationContainer>
            <TokenContext.Provider value={{token}}>
                <RootNav  />
            </TokenContext.Provider>
        </NavigationContainer>
    );
};

export default registerRootComponent(App);
