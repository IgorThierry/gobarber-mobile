import React from 'react';

import { View, Text, Alert, TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

export default function Dashboard({ navigation }) {
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(signOut());
    }

    return (
        <View>
            <Text>Dashbosta</Text>
            <TouchableOpacity onPress={handleSubmit}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}
