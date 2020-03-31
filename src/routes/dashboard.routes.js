import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import NewAppointmentRoutes from './newAppointment.routes';

const Tab = createBottomTabNavigator();

export default function DashboardRoutes() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: '#fff',
                inactiveTintColor: 'rgba(255,255,255, 0.5)',
                activeBackgroundColor: '#7159c1',
                style: {
                    backgroundColor: '#8d41a8',
                    borderTopColor: '#8d41a8',

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
                name="NewAppointment"
                component={NewAppointmentRoutes}
                options={{
                    tabBarLabel: 'Novo',
                    tabBarIcon: ({ color }) => (
                        <Icon name="add" size={20} color={color} />
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
    );
}
