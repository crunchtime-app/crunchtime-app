import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {FlashCardFlowModal, AddTestModal, AddDeckModal, LoginScreen} from '../screens';
import {colors} from '../../resources';

import TabNav from './TabNav';
import RouteNames from './RouteNames';

const Root = createStackNavigator();

const RootNav = () => {
    return (
        <Root.Navigator
            headerMode="none"
            mode="modal"
            screenOptions={{cardStyle: {backgroundColor: colors.modalShadow}}}
        >
            <Root.Screen name={RouteNames.LOGIN_SCREEN} component={LoginScreen} />
            <Root.Screen name={RouteNames.TAB_NAV} component={TabNav} />
            <Root.Screen
                name={RouteNames.FLASHCARD_SESSION}
                component={FlashCardFlowModal}
            />
            <Root.Screen
                name={RouteNames.ADD_SCHEDULED_TEST}
                component={AddTestModal}
            />
            <Root.Screen
                name={RouteNames.ADD_NEW_DECK}
                component={AddDeckModal}
            />
        </Root.Navigator>
    );
};

export default RootNav;
