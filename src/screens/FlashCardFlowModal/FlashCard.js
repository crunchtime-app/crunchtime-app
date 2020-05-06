import React from 'react';
import styled from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons';

import {colors} from '../../resources';

const FlashCardContainer = styled.View`
    background: ${colors.white};
    width: 85%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 10px;
`;

const Container = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 50px;
`;

const FlashCardText = styled.Text`
    font-size: 36px;
    color: ${colors.body};
`;

const FlashCard = ({card, isFlipped, setFlipped}) => {

    return (
        <Container>
            <FlashCardContainer onTouchStart={() => setFlipped(!isFlipped)}>
                <FlashCardText>
                    {isFlipped ? card.back : card.front}
                </FlashCardText>
            </FlashCardContainer>
            <Ionicons
                name="md-redo"
                size={50}
                style={{
                    transform: isFlipped
                        ? [{scaleX: -1}, {scaleY: -1}]
                        : [{scaleY: -1}]
                }}
                color={colors.action}
                onTouchStart={() => setFlipped(!isFlipped)}
            />
        </Container>
    );
};

export default FlashCard;
