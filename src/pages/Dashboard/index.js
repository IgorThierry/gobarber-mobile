import React, { useEffect, useState } from 'react';
import {Alert} from 'react-native';
import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';
import { Container, Title, List } from './styles';

export default function Dashboard() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        async function loadAppointment() {
            const response = await api.get('appointments');
            setAppointments(response.data);
        }

        loadAppointment();
    }, []);

    async function handleCancel(id) {
        const response = await api.delete(`appointments/${id}`);
        setAppointments(
            appointments.map((appointment) =>
                appointment.id === id
                    ? { ...appointment, canceled_at: response.data.canceled_at }
                    : appointment
            )
        );

        Alert.alert('OK!', 'Agendamento cancelado com sucesso!');
    }

    return (
        <Background>
            <Container>
                <Title>Agendamentos</Title>

                <List
                    data={appointments}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <Appointment
                            onCancel={() => handleCancel(item.id)}
                            data={item}
                        />
                    )}
                />
            </Container>
        </Background>
    );
}
