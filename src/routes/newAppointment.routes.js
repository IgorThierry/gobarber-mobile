import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

const NewAppointmentStack = createStackNavigator();

export default function NewAppointmentRoutes({ navigation }) {
    return (
        <NewAppointmentStack.Navigator
            screenOptions={{
                /* headerStyle: {
                    backgroundColor: '#7159c1',
                }, */
                headerTintColor: '#fff',
                headerLeftContainerStyle: {
                    marginLeft: 20,
                },
                headerTransparent: true,
                headerTitleAlign: 'center',
                // headerShown: false
            }}
            headerMode="float"
        >
            <NewAppointmentStack.Screen
                name="SelectProvider"
                component={SelectProvider}
                options={{
                    headerTitle: 'Selecione o prestador',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Dashboard');
                            }}
                        >
                            <Icon name="chevron-left" color="#fff" size={20} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <NewAppointmentStack.Screen
                name="SelectDateTime"
                component={SelectDateTime}
                options={{
                    headerTitle: 'Selecione o horário',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('SelectProvider');
                            }}
                        >
                            <Icon name="chevron-left" color="#fff" size={20} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <NewAppointmentStack.Screen
                name="Confirm"
                component={Confirm}
                options={{
                    headerTitle: 'Confirmar agendamento',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('SelectDateTime');
                            }}
                        >
                            <Icon name="chevron-left" color="#fff" size={20} />
                        </TouchableOpacity>
                    ),
                }}
            />
        </NewAppointmentStack.Navigator>
    );
}
