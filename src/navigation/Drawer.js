import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ModalStackNav from './ModalStackNav';
import RouteNames from './RouteNames';
import {DrawerContent} from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator
            initialRouteName={RouteNames.STACK_NAV}
            drawerType="slide"
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name={RouteNames.STACK_NAV}
                component={ModalStackNav}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNav;
