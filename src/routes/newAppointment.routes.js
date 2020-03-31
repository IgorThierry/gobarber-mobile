import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

const NewAppointmentStack = createStackNavigator();

export default function NewAppointmentRoutes() {
    return (
        <NewAppointmentStack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#7159c1' },
            }}
            headerMode="float"
        >
            <NewAppointmentStack.Screen
                name="SelectProvider"
                component={SelectProvider}
                options={{
                    headerTitle: 'Selecione o prestador',
                    headerTintColor: '#fff',
                }}
            />
            <NewAppointmentStack.Screen
                name="SelectDateTime"
                component={SelectDateTime}
            />
            <NewAppointmentStack.Screen name="Confirm" component={Confirm} />
        </NewAppointmentStack.Navigator>
    );
}
