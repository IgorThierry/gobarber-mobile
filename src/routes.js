import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createStackNavigator();

const defaultOptions = {
    headerShown: false,
};

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={defaultOptions}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}