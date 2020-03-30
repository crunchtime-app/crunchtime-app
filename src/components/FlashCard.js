import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { IoMdRedo } from 'react-icons/io';

import colors from '../resources/colors';

const FlashCardContainer = styled.View`
    background: ${colors.lightGrey};
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

const FlashCard = ({ card }) => {
    const [isFlipped, setFlipped] = useState(false);

    return (
        <Container>
            <FlashCardContainer>
                <Text style={{fontSize: '30px'}}>{isFlipped ? card.back : card.front}</Text>
            </FlashCardContainer>
            <IoMdRedo
                size={50}
                style={{transform: isFlipped ? 'scaleX(-1) scaleY(-1)' : 'scaleY(-1)'}}
                color={colors.purple}
                onClick={() => setFlipped(!isFlipped)}
            />
        </Container>
    );
}

export default FlashCard;