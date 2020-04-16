import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

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


    padding: 10px;
`;

const Title = styled.Text`
    color: ${colors.white};
    opacity: 0.85;
    font-size: 28px;
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
