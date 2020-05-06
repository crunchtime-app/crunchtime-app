import React from 'react';
import styled from 'styled-components/native';
import {ScrollView, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import RouteNames from '../../navigation/RouteNames';
import {Page, BaseCard} from '../../common';
import {colors} from '../../resources';
import {useApiGet} from '../../services';

const DeckCard = styled(BaseCard)`
    justify-content: center;
    width: 200px;
    margin-bottom: 20px;
    margin-right: 5px;
`;

const DeckContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const SubjectTitle = styled.Text`
    font-size: 20px;
    color: ${colors.body};
    margin: 5px;
    margin-left: 15px;
`;

const DecksListScreen = ({navigation}) => {
    const [decks] = useApiGet('/api/decks');
    const [subjects] = useApiGet('/api/subjects');

    return (
        <Page
            title="Decks"
            action={
                <Ionicons
                    name={'md-add'}
                    size={35}
                    color={colors.action}
                    onTouchStart={() =>
                        navigation.navigate(RouteNames.ADD_NEW_DECK)
                    }
                />
            }
        >
            <ScrollView style={{width: '100%'}}>
                {subjects.map((subject) => (
                    <View key={subject.id}>
                        <SubjectTitle>{subject.name}</SubjectTitle>
                        <DeckContainer>
                            <ScrollView
                                style={{width: '100%'}}
                                horizontal={true}
                            >
                                {decks
                                    .filter(
                                        (deck) => deck.subject.id == subject.id
                                    )
                                    .map((deck) => (
                                        <DeckCard key={deck.id}>
                                            <Text>{deck.name}</Text>
                                        </DeckCard>
                                    ))}
                            </ScrollView>
                        </DeckContainer>
                    </View>
                ))}
            </ScrollView>
        </Page>
    );
};

export default DecksListScreen;
