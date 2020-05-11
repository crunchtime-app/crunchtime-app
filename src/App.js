import React from 'react';
import {registerRootComponent} from 'expo';
import {NavigationContainer} from '@react-navigation/native';
import {AsyncStorage} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import decode from 'jwt-decode';

import {TokenContext, BadgeContext} from './state';
import {Drawer} from './navigation';
import {theme} from './resources';
import axios from './services';

const App = () => {
    const [token, setToken] = React.useState('');
    const [badgeCount, setBadgeCount] = React.useState(0);
    const [isAchievementsEnabled, setAchievementsEnabled] = React.useState(
        false
    );

    React.useEffect(() => {
        const retrieveToken = async () => {
            const storedToken = await AsyncStorage.getItem('@token');
            setToken(storedToken);
            setAchievementsEnabled(true);
            axios.defaults.headers.common['Authorization'] = storedToken;

            try {
                let userId = decode(storedToken).id;
                const result = await axios.get(`/api/users/${userId}/badges`);
                setBadgeCount(result.data.length);
            } catch (e) {
                clearToken();
                console.log(e);
            }
        };

        retrieveToken();
    }, []);

    const storeToken = async _token => {
        await AsyncStorage.setItem('@token', _token);
        setToken(_token);
        axios.defaults.headers.common['Authorization'] = _token;
    };

    const clearToken = async () => {
        await AsyncStorage.removeItem('@token');
        setToken('');
    };

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <TokenContext.Provider value={{token, clearToken, storeToken}}>
                    <BadgeContext.Provider
                        value={{
                            badgeCount,
                            setBadgeCount,
                            isAchievementsEnabled
                        }}
                    >
                        <Drawer />
                    </BadgeContext.Provider>
                </TokenContext.Provider>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default registerRootComponent(App);
