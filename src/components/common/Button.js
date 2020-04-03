import React from 'react';
import styled from 'styled-components/native';
import colors from '../../resources/colors';

const ButtonContainer = styled.TouchableOpacity`
    min-width: 200px;
    height: 40px;
    /* padding: 20px; */
    border-radius: 20px;
    /* margin: 5px; */

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.primary ? colors.purple : colors.white};
    border: 3px solid ${props => props.primary ? colors.purple : colors.purple};
`;

const ButtonText = styled.Text`
    font-size: 20px;
    color: ${props => props.primary ? colors.white : colors.purple};
    text-align: center;
`;

const Button = ({onPress, children, primary}) => (
    <ButtonContainer onPress={onPress} primary={primary}>
        <ButtonText primary={primary}>{children}</ButtonText>
    </ButtonContainer>
);

export default Button;
