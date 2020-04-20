import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Button} from '../../common';
import {Label, InputRow, ButtonRow, TextInput} from '../../common/form';
import axios from '../../../services';

const CreateCard = ({deckId}) => {
    const navigation = useNavigation();

    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    const handleSubmit = async () => {
        try {
            const res = await axios.post(`/api/decks/${deckId}/cards`, {
                front: front,
                back: back,
            });
            // setDeckId(res.data.id);
            // navigation.goBack
        } catch (e) {
            console.log(e);
            // navigation.goBack();
        }
    };

    const handleDone = () => {
        // go back to previous page and refresh
    };

    return (
        <>
            <InputRow>
                <Label>Front</Label>
                <TextInput
                    value={front}
                    onChangeText={(val) => setFront(val)}
                    placeholder="Enter front of card"
                />
            </InputRow>
            <InputRow>
                <Label>Back</Label>
                <TextInput
                    value={back}
                    onChangeText={(val) => setBack(val)}
                    placeholder="Enter back of card"
                />
            </InputRow>
            <ButtonRow>
                <Button primary="true" onPress={handleSubmit}>
                    Add another
                </Button>
                <Button onPress={() => navigation.goBack()}>Cancel</Button>
            </ButtonRow>
        </>
    );
};

export default CreateCard;
