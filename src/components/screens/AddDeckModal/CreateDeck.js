import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {useNavigation} from '@react-navigation/native';

import {Button} from '../../common';
import {Label, InputRow, ButtonRow, TextInput} from '../../common/form';
import axios, {useGetEndpoint} from '../../../services';

const CreateDeck = ({setDeckId}) => {
    const navigation = useNavigation();

    const [deckName, setDeckName] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const [subjects] = useGetEndpoint('/api/subjects');

    const handleSubmit = async () => {
        try {
            const res = await axios.post('/api/decks', {
                subject_id: subjectId,
                name: deckName
            });
            setDeckId(res.data.id);
        } catch (e) {
            console.log(e)
            navigation.goBack();
        }
    };


    return (
        <>
            <InputRow>
                <Label>Name</Label>
                <TextInput
                    value={deckName}
                    onChangeText={val => setDeckName(val)}
                    placeholder="Enter deck name"
                />
            </InputRow>
            <InputRow>
                <Label>Subject</Label>
                <RNPickerSelect
                    onValueChange={(val) => setSubjectId(val)}
                    items={subjects.map((s) => ({label: s.name, value: s.id}))}
                />
            </InputRow>
            <ButtonRow>
                <Button primary="true" onPress={handleSubmit}>
                    Start adding cards
                </Button>
                <Button onPress={() => navigation.goBack()}>Cancel</Button>
            </ButtonRow>
        </>
    );
};

export default CreateDeck;
