import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultOptions = {
    headerShown: false,
};

export default function Routes() {
    const signed = useSelector((state) => state.auth.signed);

    return signed ? (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={Dashboard} />
        </Tab.Navigator>
    ) : (
        <Stack.Navigator screenOptions={defaultOptions}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}
