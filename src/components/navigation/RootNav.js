import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {FlashCardFlowScreen} from '../screens';
import {TabNav, RouteNames} from '.';

const Root = createStackNavigator();
const RootNav = () => {
    return (
        <Root.Navigator headerMode="none">
            <Root.Screen name={RouteNames.TAB_NAV} component={TabNav} />
            <Root.Screen
                name={RouteNames.FLASHCARD_SESSION}
                component={FlashCardFlowScreen}
            />
        </Root.Navigator>
    );
};

export default RootNav;
