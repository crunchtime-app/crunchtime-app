import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import decode from 'jwt-decode';

import {colors} from '../../../resources';
import {Page, BaseCard} from '../../common';
import {useGetEndpoint} from '../../../services';
import {TokenContext} from '../../../state';

const Achievement = styled(BaseCard)`
    justify-content: space-around;
    padding: 10px;
`;

const Badge = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 15px;
    background: ${(props) => (props.achieved ? colors.action : colors.grey)};
`;

const Description = styled.Text`
    font-size: 20px;
`;

const AchievementScreen = () => {
    const {token} = useContext(TokenContext);
    let userId = decode(token).id;

    const userAchievements = useGetEndpoint(`/api/users/${userId}/badges`);
    const earnedIds = userAchievements.map((a) => a.id);

    const allAchievements = useGetEndpoint('/api/badges');

    const activeAchievements = allAchievements
        .filter((a) => earnedIds.includes(a.id))
        .map((a) => {
            a.achieved = true;
            return a;
        });

    const achievements = activeAchievements.concat(
        allAchievements.filter((a) => !earnedIds.includes(a.id))
    );

    return (
        <Page title="Achievements">
            <ScrollView>
                {achievements.map((cheevo, i) => (
                    <Achievement key={cheevo.id}>
                        <Badge achieved={cheevo.achieved} />
                        <Description>{cheevo.desc}</Description>
                    </Achievement>
                ))}
            </ScrollView>
        </Page>
    );
};

export default AchievementScreen;
