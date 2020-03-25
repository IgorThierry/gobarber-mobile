import React from 'react';
import { Image } from 'react-native';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

export default function SignUp({ navigation }) {
    return (
        <Background>
            <Container>
                <Image source={logo} />
                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome completo"
                    />
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                    />

                    <SubmitButton onPress={() => {}}>Criar conta</SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignIn')}>
                    <SignLinkText>Já tenho uma conta.</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
