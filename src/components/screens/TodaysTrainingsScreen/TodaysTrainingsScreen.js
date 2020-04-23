import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {Page} from '../../common';
import {colors} from '../../../resources';
import RouteNames from '../../navigation/RouteNames';
import {useApiGet} from '../../../services';

import ScheduledTestCard from './ScheduledTestCard';

const Message = styled.Text`
    color: ${colors.white};
    font-size: 30px;
    margin: 100px 20px;
    text-align: center;
`;

const TodaysTrainingsScreen = ({navigation}) => {
    const [trainings] = useApiGet('/api/trainings?day=today');

    const incompleteTrainings = trainings.filter(
        (training) => !training.is_complete
    );

    return (
        <Page
            title="Today's Sets"
            action={
                <Ionicons
                    name={'md-add'}
                    size={35}
                    color={colors.action}
                    onTouchStart={
                        () => navigation.navigate(RouteNames.ADD_SCHEDULED_TEST)
                        // navigation.navigate(RouteNames.ACHIEVEMENT_UNLOCKED)
                        // TODO REVERT THIS
                    }
                />
            }
        >
            {incompleteTrainings.length ? (
                <ScrollView style={{width: '100%'}}>
                    {incompleteTrainings.map((training) => (
                        <ScheduledTestCard
                            key={training.id}
                            navigation={navigation}
                            // test={training.test}
                            training={training}
                        />
                    ))}
                </ScrollView>
            ) : (
                <Message>
                    {trainings.length == incompleteTrainings.length
                        ? 'Welcome to Crunch Time! Press the + to add a test!'
                        : 'Great job! You studied all your flash cards for today!'}
                </Message>
            )}
        </Page>
    );
};

export default TodaysTrainingsScreen;
