import React, { useState, useMemo } from 'react';

import { Platform } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
    const [opened, setOpened] = useState(false);

    const dateFormatted = useMemo(
        () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
        [date]
    );

    function handleChange(event, selectedDate) {
        const currentDate = selectedDate || date;
        setOpened(Platform.OS === 'ios');
        onChange(currentDate);
    }

    return (
        <Container>
            <DateButton onPress={() => setOpened(!opened)}>
                <Icon name="event" color="#fff" size={20} />
                <DateText>{dateFormatted}</DateText>
            </DateButton>

            {opened && (
                <DateTimePicker
                    value={date}
                    onChange={handleChange}
                    minimumDate={new Date()}
                    mode="date"
                    display="spinner"
                />
            )}
        </Container>
    );
}
