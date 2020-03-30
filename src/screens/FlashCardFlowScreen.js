import React from 'react';
import {View} from 'react-native';

import {Title, Page, FlashCard, Button} from '../components'

const mockCards = [
    {
        front: '',
        back: '',
    },
]

const FlashCardFlowScreen = () => {



    return (
        <Page centered>
            <Title style={{marginBottom: '50px'}}>25 of 50</Title>
            <FlashCard card={{front: 'Front of card', back: 'Back of Card'}} />
            <View>
                <Button primary onPress={() => alert('Hi!')}>Mark Correct</Button>
                <Button onPress={() => alert('Hello!')}>Mark Incorrect</Button>
            </View>
        </Page>
    );
}

export default FlashCardFlowScreen;