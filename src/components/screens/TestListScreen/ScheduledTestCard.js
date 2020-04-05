import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import {EvilIcons} from '@expo/vector-icons';

import {Text} from 'react-native';

dayjs.extend(RelativeTime);

const Card = styled.View`
    background: #fff;
    width: 90%;
    min-height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    border-radius: 15px;
    padding: 10px 20px;
    margin: 5px;
`;

const TestName = styled.Text`
    font-size: 30px;
    margin-bottom: 2px;
`;

const ScheduledTestCard = ({test, navigation}) => {
    let dateString = dayjs().to(test.date);

    return (
        <Card onTouchStart={() => navigation.navigate('Flash Card Session')}>
            <View>
                <TestName>{test.name}</TestName>
                <Text>Test {dateString}</Text>
            </View>
            <EvilIcons name={'chevron-right'} size={50} />
        </Card>
    );
};

export default ScheduledTestCard;
