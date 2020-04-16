import React from 'react';
import {Provider} from 'react-redux';
import {registerRootComponent} from 'expo';
import {NavigationContainer} from '@react-navigation/native';

import {RootNav} from './components/navigation';
import store from './state/store';


console.log(store.getState());

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootNav />
            </NavigationContainer>
        </Provider>
    );
};

export default registerRootComponent(App);
