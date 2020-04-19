import React from 'react';
import styled from 'styled-components/native';
import colors from '../../resources/colors';

const ButtonContainer = styled.TouchableOpacity`
    min-width: 175px;
    height: 40px;
    border-radius: 20px;
    margin: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) =>
        props.primary ? colors.action : 'transparent'};
    border: 3px solid
        ${(props) => (props.primary ? colors.action : colors.action)};
`;

const ButtonText = styled.Text`
    font-size: 20px;
    color: ${(props) => (props.primary ? colors.white : colors.action)};
    text-align: center;
`;

const Button = ({onPress, text, primary, children}) => {
    const content = children ? children : text;

    return (
        <ButtonContainer onPress={onPress} primary={primary}>
            <ButtonText primary={primary}>{content}</ButtonText>
        </ButtonContainer>
    );
};

export default Button;
