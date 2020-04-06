import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
// import {View} from 'react-native';

import {Modal, Button} from '../../common';
import FlashCard from './FlashCard';

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

const Counter = styled.Text`
    margin: 20px 0 50px 0;
    font-size: 30px;
`;

const FlashCardFlowScreen = ({cards = mockCards}) => {
    const [currentCard, setCurrentCard] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        if (cards.length === currentCard) {
            navigation.popToTop();
        }
    });

    return (
        <>
            {cards[currentCard] && (
                <Modal>
                    <Counter>{currentCard + 1 + ' of ' + cards.length}</Counter>
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
                </Modal>
            )}
        </>
    );
};

const markCard = (isCorrect, currentCard, setCurrentCard) => {
    setCurrentCard(currentCard + 1);
};

export default FlashCardFlowScreen;
