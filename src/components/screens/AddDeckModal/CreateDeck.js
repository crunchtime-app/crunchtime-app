import React, {useState} from 'react';
import {Picker} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button} from '../../common';
import {Label, InputRow, ButtonRow, TextInput} from '../../common/form';

const CreateDeck = ({setDeckView}) => {
    const navigation = useNavigation();

    const [deckName, setDeckName] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');

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
                <Picker
                    selectedValue={selectedSubject}
                    onValueChange={val => setSelectedSubject(val)}
                >
                    <Picker.Item label="Computer Science" value="java" />
                    <Picker.Item label="Physics" value="js" />
                </Picker>
            </InputRow>
            <ButtonRow>
                <Button primary onPress={() => setDeckView()}>
                    Start adding cards
                </Button>
                <Button onPress={() => navigation.goBack()}>Cancel</Button>
            </ButtonRow>
        </>
    );
};

export default CreateDeck;
