import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors} from '../../resources';
import {
    TestListScreen,
    DecksListScreen,
    AchievementScreen,
    AboutScreen,
} from '../screens';
import RouteNames from './RouteNames';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.tabIcons,
                inactiveTintColor: colors.inactive,
                style: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    overflow: 'hidden',
                    position: 'absolute',
                },
            }}
        >
            <Tab.Screen
                name={RouteNames.TEST_LIST_SCREEN}
                component={TestListScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name={'md-calendar'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={RouteNames.COMMUNITY}
                component={DecksListScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name={'md-apps'} size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={RouteNames.BADGES}
                component={AchievementScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name={'md-trophy'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={RouteNames.ABOUT_CRUNCHTIME}
                component={AboutScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name={'ios-information-circle'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNav;
