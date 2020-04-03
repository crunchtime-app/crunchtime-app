import React, {useState, useEffect} from 'react';
// import styled from 'styled-components'; 
import {View} from 'react-native';

import {Title, Page, FlashCard, Button} from '../common';

const mockCards = [
    {
        front: 'Hola',
        back: 'Hello'
    },
    {
        front: 'Aloha',
        back: 'Hello'
    },
    {
        front: 'Bye',
        back: 'Hello'
    },
    {
        front: 'Hi',
        back: 'Hello'
    },
    {
        front: 'Yello',
        back: 'Hello'
    },
    {
        front: 'Hola',
        back: 'Amigo'
    }
];


const FlashCardFlowScreen = ({cards = mockCards, navigation}) => {
    const [currentCard, setCurrentCard] = useState(0);

    useEffect(() => {
        if (cards.length === currentCard) {
            navigation.popToTop();
        }
    });

    return (
        <View style={{height: '100%'}}>
            {cards[currentCard] &&
                <Page title="Test">
                    <Title>
                        {currentCard + 1} of {cards.length}
                    </Title>
                    <FlashCard card={cards[currentCard]} />
                    {/* <Plain> */}
                        <Button
                            primary
                            onPress={() =>
                                markCard(
                                    true,
                                    currentCard,
                                    setCurrentCard,
                                    navigation
                                )
                            }
                        >
                            Mark Correct
                        </Button>
                        <Button
                            onPress={() =>
                                markCard(
                                    false,
                                    currentCard,
                                    setCurrentCard,
                                    navigation
                                )
                            }
                            text="Mark INCORRECT"
                        >
                            Mark Incorrect
                        </Button>
                    {/* </Plain> */}
                </Page>
            }
        </View>
    );
};

const markCard = (isCorrect, currentCard, setCurrentCard) => {
    setCurrentCard(currentCard + 1);
};

export default FlashCardFlowScreen;
