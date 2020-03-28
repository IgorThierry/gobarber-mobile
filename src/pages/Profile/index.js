import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Background from '~/components/Background';

import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';
// import { Container } from './styles';

export default function Profile() {
    const dispatch = useDispatch();

    function handleSair() {
        dispatch(signOut());
    }

    return (
        <Background>
            <TouchableOpacity onPress={handleSair}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </Background>
    );
}
