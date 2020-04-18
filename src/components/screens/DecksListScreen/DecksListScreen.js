import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {ScrollView, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {RouteNames} from '../../navigation';
import {Page, BaseCard} from '../../common';
import {colors} from '../../../resources';
import {axios} from '../../../services';
import {TokenContext} from '../../../state';

const mockDecks = [
    {
        subject: 'Physics',
        id: 111,
        decks: [
            {
                id: 1,
                name: 'Electromagnetism',
            },
            {
                id: 2,
                name: 'Projectiles',
            },
            {
                id: 3,
                name: 'Gravity',
            },
            {
                id: 4,
                name: 'Force',
            },
            {
                id: 5,
                name: 'Acceleration',
            },
        ],
    },
    {
        subject: 'Computer Science',
        id: 112,
        decks: [
            {
                id: 12,
                name: 'Linked Lists',
            },
            {
                id: 22,
                name: 'Arrays',
            },
            {
                id: 32,
                name: 'AI',
            },
            {
                id: 42,
                name: 'Stacks',
            },
            {
                id: 52,
                name: 'Networks',
            },
        ],
    },
];

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

const DecksListScreen = ({decksBySubject = mockDecks, navigation}) => {
    const [decks, setDecks] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const {token} = useContext(TokenContext);

    useEffect(() => {
        const fetch = async () => {
            const result = await axios('/api/decks', {
                headers: {authorization: token},
            });
            setDecks(result.data);
        };

        fetch();
    }, []);

    useEffect(() => {
        const fetch = async () => {
            const result = await axios('/api/subjects', {
                headers: {authorization: token},
            });
            setSubjects(result.data);
        };

        fetch();
    }, []);

    // const filterDeckBySubject = (decks, subject_id) => {
    //     return decks.filter()
    // }

    return (
        <Page
            title="Decks"
            action={
                <Ionicons
                    name={'md-add-circle'}
                    size={35}
                    color={colors.white}
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
