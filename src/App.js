import React from 'react';
import {registerRootComponent} from 'expo';
import {NavigationContainer} from '@react-navigation/native';

import {RootNav} from './components/navigation';
import {StateProvider, SAVE_TOKEN} from './state';

const App = () => {
    const initialState = {
        token: 'initial token state',
    };

    const reducer = (state, action) => {

        switch (action.type) {
            case SAVE_TOKEN:
                return {
                    ...state,
                    token: action.token,
                };

            default:
                return state;
        }
    };

    return (
        // <Provider store={store}>
        <StateProvider initialState={initialState} reducer={reducer}>
            <NavigationContainer>
                <RootNav />
            </NavigationContainer>
        </StateProvider>
        // </Provider>
    );
};

export default registerRootComponent(App);
