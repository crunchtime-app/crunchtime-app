import React from 'react';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';
import colors from '../../resources/colors';

const PageContainer = styled.View`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Header = styled.View`
    background: ${colors.purple};
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const Title = styled.Text`
    color: ${colors.white};
    opacity: 0.9;
    font-size: 40px;
`;

const Body = styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    flex-grow: 1;

    background: ${colors.lightGrey};
`;

const Page = ({title, children}) => {
    return (
       <SafeAreaView style={{flex: 1, backgroundColor: colors.purple}}>
            <PageContainer>
                <Header>
                    <Title>{title}</Title>
                </Header>
                <Body>{children}</Body>
            </PageContainer>
       </SafeAreaView>
    );
};

export default Page;
