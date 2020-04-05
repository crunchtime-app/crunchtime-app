import React from 'react';
import {registerRootComponent} from 'expo';
import {NavigationContainer} from '@react-navigation/native';

import {RootNav} from './components/navigation';

const App = () => {
    return (
        <NavigationContainer>
            <RootNav />
        </NavigationContainer>
    );
};

export default registerRootComponent(App);
