import React, {useState} from 'react';
import {Picker} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';

import {Modal, Button} from '../../common';
import {DatePicker, Label, InputRow, ButtonRow} from '../../common/form';
import {colors} from '../../../resources';

// const Label = styled.Text`
    /* font-size: 20px;
`;

const InputRow = styled.View`
    display: flex;
    width: 90%;
    margin: 5px;
`;

const Buttons = styled.View`
    margin: 25px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 90%;
`; */

const AddTestModal = () => {
    const navigation = useNavigation();

    const [selectedSubject, setSelectedSubject] = useState('');
    const [date, setDate] = useState(dayjs());

    return (
        <Modal>
            <InputRow>
                <Label>Subject</Label>
                <Picker
                    selectedValue={selectedSubject}
                    onValueChange={val => setSelectedSubject(val)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </InputRow>
            <InputRow>
                <Label>Date</Label>
                <DatePicker value={date} onChange={val => setDate(val)} />
            </InputRow>
            <ButtonRow>
                <Button primary>Add to schedule</Button>
                <Button onPress={() => navigation.goBack()}>Cancel</Button>
            </ButtonRow>
        </Modal>
    );
};

export default AddTestModal;
