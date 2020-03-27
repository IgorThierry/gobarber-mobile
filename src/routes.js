import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultOptions = {
    headerShown: false,
};

export default function Routes() {
    const signed = useSelector((state) => state.auth.signed);

    return signed ? (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: '#FFF',
                inactiveTintColor: 'rgba(255,255,255, 0.6)',
                style: {
                    backgroundColor: '#8d41a8',
                    borderTopColor: '#8d41a8',
                    paddingBottom: 5,
                    paddingTop: 5,
                },
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: 'Agendamentos',
                    tabBarIcon: ({ color }) => (
                        <Icon name="event" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Meu perfil',
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" size={20} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    ) : (
        <Stack.Navigator screenOptions={defaultOptions}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}
