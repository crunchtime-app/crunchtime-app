import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
// import {View} from 'react-native';

import {Modal, Button} from '../../common';
import FlashCard from './FlashCard';
import {useApiGet} from '../../../services';

const Counter = styled.Text`
    margin: 20px 0 50px 0;
    font-size: 30px;
`;

const FlashCardFlowScreen = ({route}) => {
    const [currentCard, setCurrentCard] = useState(0);
    const navigation = useNavigation();

    const deckId = route.params.deckId;
    const [cards] = useApiGet(`/api/decks/${deckId}/cards`);

    const handlePress = (isCorrect, currentCard, setCurrentCard) => {
        setCurrentCard(currentCard + 1);

        if (cards.length - 1 === currentCard) {
            console.log(cards.length);
            console.log(currentCard);
            navigation.popToTop();
        }
    };

    return (
        <>
            {cards[currentCard] && (
                <Modal>
                    <Counter>{currentCard + 1 + ' of ' + cards.length}</Counter>
                    <FlashCard card={cards[currentCard]} />
                    <Button
                        primary="true"
                        text="Mark Correct"
                        onPress={() =>
                            handlePress(true, currentCard, setCurrentCard)
                        }
                    />
                    <Button
                        text="Mark Incorrect"
                        onPress={() =>
                            handlePress(false, currentCard, setCurrentCard)
                        }
                    />
                </Modal>
            )}
        </>
    );
};

export default FlashCardFlowScreen;
