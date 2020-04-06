import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Button} from '../../common';
import {Label, InputRow, ButtonRow, TextInput} from '../../common/form';

const CreateCard = () => {
    const navigation = useNavigation();

    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    return (
        <>
            <InputRow>
                <Label>Front</Label>
                <TextInput
                    value={front}
                    onChangeText={val => setFront(val)}
                    placeholder="Enter front of card"
                />
            </InputRow>
            <InputRow>
                <Label>Back</Label>
                <TextInput
                    value={back}
                    onChangeText={val => setBack(val)}
                    placeholder="Enter back of card"
                />
            </InputRow>
            <ButtonRow>
                <Button primary onPress={() =>  navigation.goBack()}>
                    Add another
                </Button>
                <Button onPress={() => navigation.goBack()}>Cancel</Button>
            </ButtonRow>
        </>
    );
};

export default CreateCard;
