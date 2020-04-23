import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
// import {View} from 'react-native';

import {Modal, Button} from '../../common';
import FlashCard from './FlashCard';
import axios, {useApiGet} from '../../../services';

const Counter = styled.Text`
    margin: 20px 0 50px 0;
    font-size: 30px;
`;

const FlashCardFlowScreen = ({route}) => {
    const [currentCard, setCurrentCard] = useState(0);
    const [isFlipped, setFlipped] = useState(false);
    const navigation = useNavigation();

    const deckId = route.params.deckId;
    const trainingId = route.params.trainingId;

    const [cards] = useApiGet(`/api/decks/${deckId}/cards`);

    const handlePress = async (currentCard, setCurrentCard) => {
        //isCorrect
        setFlipped(false);
        setCurrentCard(currentCard + 1);

        if (cards.length - 1 === currentCard) {
            await axios.patch(`/api/trainings/${trainingId}/status`, {
                status: 'done',
            });
            navigation.popToTop();
        }
    };

    return (
        <>
            {cards[currentCard] && (
                <Modal>
                    <Counter>{currentCard + 1 + ' of ' + cards.length}</Counter>
                    <FlashCard
                        card={cards[currentCard]}
                        isFlipped={isFlipped}
                        setFlipped={setFlipped}
                    />
                    <Button
                        primary="true"
                        text="Mark Correct"
                        onPress={() =>
                            handlePress(currentCard, setCurrentCard, true)
                        }
                    />
                    <Button
                        text="Mark Incorrect"
                        onPress={() =>
                            handlePress(currentCard, setCurrentCard, false)
                        }
                    />
                </Modal>
            )}
        </>
    );
};

export default FlashCardFlowScreen;
