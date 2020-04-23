import React, {useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import decode from 'jwt-decode';

import RouteNames from '../navigation/RouteNames';
import axios from '../../services';
import {TokenContext, BadgeContext} from '../../state';
import colors from '../../resources/colors';

const PageContainer = styled.View`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Header = styled.View`
    background: ${colors.backgroundTop};
    height: 65px;
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;

    padding: 10px;
`;

const Title = styled.Text`
    color: ${colors.body};
    opacity: 0.85;
    font-size: 24px;
    font-weight: 500;
`;

const Action = styled.Text`
    opacity: 0.85;
    position: absolute;
    right: 25px;
    padding: 5px;
`;

const Body = styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
    flex-grow: 1;
`;

const Page = ({title, children, action}) => {
    const navigation = useNavigation();
    let {token} = useContext(TokenContext);
    let {badgeCount, setBadgeCount, isAchievementsEnabled} = useContext(
        BadgeContext
    );

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            if (token && isAchievementsEnabled) {
                const userId = decode(token).id;
                const result = await axios.get(`/api/users/${userId}/badges`);
                const newBadgeCount = result.data.length;
                if (newBadgeCount != badgeCount) {
                    setBadgeCount(newBadgeCount);
                    navigation.navigate(RouteNames.ACHIEVEMENT_UNLOCKED);
                }
            }
        });

        return unsubscribe;
    }, [navigation, badgeCount, isAchievementsEnabled]);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.backgroundTop}}>
            <PageContainer>
                <Header>
                    <Title>{title}</Title>
                    <Action>{action}</Action>
                </Header>
                <LinearGradient
                    style={{flex: 1}}
                    colors={[colors.backgroundTop, colors.backgroundBottom]}
                    // start={[0.0, 0.0]}
                    // start={[1.0, 0.0]}
                    // locations={[0.45, 1.0]}
                >
                    <Body>{children}</Body>
                </LinearGradient>
            </PageContainer>
        </SafeAreaView>
    );
};

export default Page;
