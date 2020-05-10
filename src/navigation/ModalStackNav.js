import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
    FlashCardFlowModal,
    AddTestModal,
    AddDeckModal,
    LoginScreen,
    AchievementUnlockedModal
} from '../screens';
import {colors} from '../resources';
import {TokenContext} from '../state';

import TabNav from './TabNav';
import RouteNames from './RouteNames';

const ModalNav = createStackNavigator();

const ModalStackNav = () => {
    const {token} = React.useContext(TokenContext);
    const isSignedIn = !!token;

    return (
        <ModalNav.Navigator
            headerMode="none"
            mode="modal"
            screenOptions={{
                cardStyle: {backgroundColor: colors.modalShadow},
            }}
        >
            {isSignedIn ? (
                <>
                    <ModalNav.Screen name={RouteNames.TAB_NAV} component={TabNav} />
                    <ModalNav.Screen
                        name={RouteNames.FLASHCARD_SESSION}
                        component={FlashCardFlowModal}
                    />
                    <ModalNav.Screen
                        name={RouteNames.ADD_SCHEDULED_TEST}
                        component={AddTestModal}
                    />
                    <ModalNav.Screen
                        name={RouteNames.ADD_NEW_DECK}
                        component={AddDeckModal}
                    />
                    <ModalNav.Screen
                        name={RouteNames.ACHIEVEMENT_UNLOCKED}
                        component={AchievementUnlockedModal}
                    />
                </>
            ) : (
                <>
                    <ModalNav.Screen
                        name={RouteNames.LOGIN_SCREEN}
                        component={LoginScreen}
                    />
                </>
            )}
        </ModalNav.Navigator>
    );
};

export default ModalStackNav;
