import React from 'react';
import styled from 'styled-components/native';
import colors from '../../resources/colors';

const ButtonContainer = styled.TouchableOpacity`
    min-width: 200px;
    height: 40px;
    border-radius: 20px;
    margin: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.primary ? colors.aqua : colors.white};
    border: 3px solid ${props => props.primary ? colors.aqua : colors.aqua};
`;

const ButtonText = styled.Text`
    font-size: 20px;
    color: ${props => props.primary ? colors.white : colors.aqua};
    text-align: center;
`;

const Button = ({onPress, text, primary}) => (
    <ButtonContainer onPress={onPress} primary={primary}>
        <ButtonText primary={primary}>{text}</ButtonText>
    </ButtonContainer>
);

export default Button;
