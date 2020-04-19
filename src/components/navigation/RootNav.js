import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
    FlashCardFlowModal,
    AddTestModal,
    AddDeckModal,
    LoginScreen,
} from '../screens';
import {colors} from '../../resources';
import {TokenContext} from '../../state';

import TabNav from './TabNav';
import RouteNames from './RouteNames';

const Root = createStackNavigator();

const RootNav = () => {
    const {token} = React.useContext(TokenContext);
    const isSignedIn = !!token;

    return (
        <Root.Navigator
            headerMode="none"
            mode="modal"
            screenOptions={{
                cardStyle: {backgroundColor: colors.modalShadow},
            }}
        >
            {isSignedIn ? (
                <>
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
                </>
            ) : (
                <>
                    <Root.Screen
                        name={RouteNames.LOGIN_SCREEN}
                        component={LoginScreen}
                    />
                    {/* <Root.Screen name={RouteNames.TAB_NAV} component={TabNav} />
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
                    /> */}
                </>
            )}
        </Root.Navigator>
    );
};

export default RootNav;
