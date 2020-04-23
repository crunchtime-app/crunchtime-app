import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

import {Modal, Button} from '../../common';
import {colors} from '../../../resources';
import {ButtonRow} from '../../common/form';
import RouteNames from '../../navigation/RouteNames';

const Title = styled.Text`
    font-size: 24px;
    text-align: center;
    color:${colors.body};
    font-weight: 500;
    margin-bottom: 20px;
`;

const Message = styled.Text`
    font-size: 16px;
    text-align: center;
    color:${colors.body};
`;

const AchievementUnlockedModal = () => {
    const navigation = useNavigation();

    return (
        <Modal>
            <Title>Achievement Unlocked</Title>
            <Message>Keep up the great work!</Message>
            <ButtonRow>
                <Button
                    primary="true"
                    onPress={() => navigation.navigate(RouteNames.BADGES)}
                >
                    See achievements
                </Button>
                <Button onPress={() => navigation.goBack()}>Thanks!</Button>
            </ButtonRow>
        </Modal>
    );
};

export default AchievementUnlockedModal;
