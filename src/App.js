import React from 'react';
import {registerRootComponent} from 'expo';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {LandingScreen, FlashCardFlowScreen} from './screens';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={LandingScreen} />
                <Tab.Screen name="Settings" component={FlashCardFlowScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default registerRootComponent(App);
