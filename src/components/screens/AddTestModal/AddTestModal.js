import React, {useState} from 'react';
// import {Picker} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';

import {Modal, Button} from '../../common';
import {DatePicker, Label, InputRow, ButtonRow} from '../../common/form';
import RNPickerSelect from 'react-native-picker-select';
import {useApiGet} from '../../../services';
import axios from '../../../services';

const AddTestModal = () => {
    const navigation = useNavigation();

    const [subjects] = useApiGet('/api/subjects');
    const [subjectId, setSubjectId] = useState('');

    const [decks, setDecks] = useState([]);
    const [deckId, setDeckId] = useState('');

    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

    const handleSubjectChange = async (val) => {
        setSubjectId(val);
        const res = await axios.get(`/api/decks?subject=${subjectId}`);
        setDecks(res.data);
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post('/api/tests', {
                deck_id: deckId,
                date: date,
            });

            console.log(res.data);
            navigation.goBack();
        } catch (e) {
            console.log(e);
            navigation.goBack();
        }
    };

    return (
        <Modal>
            <InputRow>
                <Label>Subject</Label>
                <RNPickerSelect
                    style={{padding: 25}}
                    onValueChange={handleSubjectChange}
                    items={subjects.map((s) => ({label: s.name, value: s.id}))}
                />
            </InputRow>
            <InputRow>
                <Label>Deck</Label>
                <RNPickerSelect
                    onValueChange={(val) => setDeckId(val)}
                    items={decks.map((s) => ({label: s.name, value: s.id}))}
                />
            </InputRow>
            <InputRow>
                <Label>Date</Label>
                <DatePicker
                    date={date}
                    confirmBtnText={'Confirm'}
                    cancelBtnText={'Cancel'}
                    minDate={dayjs().format('YYYY-MM-DD')}
                    maxDate={dayjs().add(60, 'day').format('YYYY-MM-DD')}
                    onDateChange={(val) => setDate(val)}
                    mode={'date'}
                    customStyles={{
                        dateIcon: {display: 'none'},
                    }}
                />
            </InputRow>
            <ButtonRow>
                <Button primary="true" onPress={handleSubmit}>
                    Add to schedule
                </Button>
                <Button onPress={() => navigation.goBack()}>Cancel</Button>
            </ButtonRow>
        </Modal>
    );
};

export default AddTestModal;
