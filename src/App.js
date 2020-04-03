import React from 'react';
import {registerRootComponent} from 'expo';
import {Ionicons} from '@expo/vector-icons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {UpcomingTestsScreen, AchievementScreen} from './components/screens';
import {FlashCardFlowScreen} from './components/modals';
import colors from './resources/colors';

const Tab = createBottomTabNavigator();
const UpcomingStack = createStackNavigator();

const RouteNames = {
    UPCOMING_STACK: 'Upcoming Stack',
    UPCOMING: 'Upcoming Tests',
    COMMUNITY: 'Community',
    BADGES: 'Badges',
    FLASHCARD_SESSION: 'Flash Card Session'
};

const UpcomingStackScreen = () => {
    return (
        <UpcomingStack.Navigator>
            <UpcomingStack.Screen
                name={RouteNames.UPCOMING}
                component={UpcomingTestsScreen}
                options={{headerShown: false}}
            />
            <UpcomingStack.Screen
                name={RouteNames.FLASHCARD_SESSION}
                component={FlashCardFlowScreen}
                options={{headerShown: false}}
            />
        </UpcomingStack.Navigator>
    );
};

const App = () => {
    return (
        // <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;

                            switch (route.name) {
                                case RouteNames.UPCOMING_STACK: {
                                    iconName = 'md-calendar';
                                    break;
                                }
                                case RouteNames.COMMUNITY: {
                                    iconName = 'md-apps';
                                    break;
                                }
                                case RouteNames.BADGES: {
                                    iconName = 'md-trophy';
                                    break;
                                }
                                default: {
                                    iconName = 'md-help';
                                    break;
                                }
                            }

                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    })}
                    tabBarOptions={{
                        activeTintColor: colors.purple,
                        inactiveTintColor: colors.grey
                    }}
                >
                    <Tab.Screen
                        name={RouteNames.UPCOMING_STACK}
                        component={UpcomingStackScreen}
                    />
                    <Tab.Screen
                        name={RouteNames.COMMUNITY}
                        component={FlashCardFlowScreen}
                    />
                    <Tab.Screen
                        name={RouteNames.BADGES}
                        component={AchievementScreen}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        // </SafeAreaProvider>
    );
};

export default registerRootComponent(App);
