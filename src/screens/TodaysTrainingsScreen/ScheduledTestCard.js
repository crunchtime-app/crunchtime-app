import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import {EvilIcons} from '@expo/vector-icons';

import {BaseCard} from '../../common';
import {colors} from '../../resources'

dayjs.extend(RelativeTime);

const Card = styled(BaseCard)`
    justify-content: space-between;
    padding: 10px 20px;
`;

const TestName = styled.Text`
    font-size: 30px;
    margin-bottom: 2px;
    color: ${colors.body};
`;

const TestSubtitle = styled.Text`
    color: ${colors.body};
`;

const ScheduledTestCard = ({training, navigation}) => {
    const test = training.test;
    let dateString = dayjs().to(test.date);

    return (
        <Card onTouchStart={() => navigation.navigate('Flash Card Session', {deckId: test.deck.id, trainingId: training.id})} key={test.id}>
            <View>
                <TestName>{test.deck.name}</TestName>
                <TestSubtitle>Test {dateString}</TestSubtitle>
            </View>
            <EvilIcons name={'chevron-right'} size={50} color={colors.action} />
        </Card>
    );
};

export default ScheduledTestCard;
