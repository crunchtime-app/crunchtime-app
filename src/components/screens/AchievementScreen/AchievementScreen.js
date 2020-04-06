import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';

import {colors} from '../../../resources';
import {Page, BaseCard} from '../../common';

const testAchievements = [
    {
        id: 100,
        achieved: true,
        desc: 'Logged on for 3 days straight!'
    },
    {
        id: 101,
        achieved: false,
        desc: 'Logged on for 3 days straight!'
    },
    {
        id: 103,
        achieved: false,
        desc: 'Logged on for 3 days straight!'
    },
    {
        id: 104,
        achieved: true,
        desc: 'Logged on for 3 days straight!'
    },
    {
        id: 105,
        achieved: false,
        desc: 'Logged on for 3 days straight!'
    },
    {
        id: 106,
        achieved: false,
        desc: 'Logged on for 3 days straight!'
    },
    {
        id: 107,
        achieved: false,
        desc: 'Logged on for 3 days straight!'
    },
    {
        id: 114,
        achieved: true,
        desc: 'Logged on for 3 days straight!'
    },
    {
        id: 113,
        achieved: false,
        desc: 'Logged on for 3 days straight!'
    },
    {
        id: 124,
        achieved: true,
        desc: 'Logged on for 3 days straight!'
    },
];

const Achievement = styled(BaseCard)`
    justify-content: space-around;
    padding: 10px;
`;

const Badge = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 15px;
    background: ${props => (props.achieved ? colors.aqua : colors.grey)};
`;

const Description = styled.Text`
    font-size: 20;
`;

const AchievementScreen = ({achievements = testAchievements}) => {
    return (
        <Page title="Achievements">
            <ScrollView>
                {achievements.map((cheevo, i) => (
                    <Achievement key={cheevo.id}>
                        <Badge achieved={cheevo.achieved} />
                        <Description status={true}>{cheevo.desc}</Description>
                    </Achievement>
                ))}
            </ScrollView>
        </Page>
    );
};

export default AchievementScreen;
