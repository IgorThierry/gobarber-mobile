import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Background from '~/components/Background';

import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

export default function Dashboard({ navigation }) {
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(signOut());
    }

    return (
        <Background>
            <Text>Dashbosta</Text>
            <TouchableOpacity onPress={handleSubmit}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </Background>
    );
}
