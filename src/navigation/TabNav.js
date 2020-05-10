import React from 'react';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors} from '../resources';
import {
    TodaysTrainingsScreen,
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
                activeTintColor: colors.active,
                inactiveTintColor: colors.inactive,
            }}
        >
            <Tab.Screen
                name={RouteNames.TODAYS_TRAININGS}
                component={TodaysTrainingsScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name={'calendar-check'}
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
                        <MaterialCommunityIcons name={'cards-outline'} size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={RouteNames.BADGES}
                component={AchievementScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name={'medal'}
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
                        <MaterialCommunityIcons
                            name={'dots-horizontal'}
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
