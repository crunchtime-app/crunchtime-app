import React, {useState, useEffect} from 'react';
// import styled from 'styled-components';
import {View} from 'react-native';

import {Title, Page, Button} from '../../common';
import {FlashCard} from '.';

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
            {cards[currentCard] && (
                <Page title={currentCard + 1 + " of " + cards.length}>
                    {/* <Title>
                        {} of {cards.length}
                    </Title> */}
                    <FlashCard card={cards[currentCard]} />
                    <Button
                        primary
                        text="Mark Correct"
                        onPress={() =>
                            markCard(
                                true,
                                currentCard,
                                setCurrentCard,
                                navigation
                            )
                        }
                    />
                    <Button
                        text="Mark Incorrect"
                        onPress={() =>
                            markCard(
                                false,
                                currentCard,
                                setCurrentCard,
                                navigation
                            )
                        }
                    />
                </Page>
            )}
        </View>
    );
};

const markCard = (isCorrect, currentCard, setCurrentCard) => {
    setCurrentCard(currentCard + 1);
};

export default FlashCardFlowScreen;
