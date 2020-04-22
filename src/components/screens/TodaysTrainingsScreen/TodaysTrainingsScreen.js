import React, {useState, useEffect, useContext} from 'react';
import {ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {Page} from '../../common';
import {colors} from '../../../resources';
import RouteNames from '../../navigation/RouteNames';
import {useApiGet} from '../../../services';

import ScheduledTestCard from './ScheduledTestCard';

const TodaysTrainingsScreen = ({navigation, route}) => {
    const [trainings] = useApiGet('/api/trainings?day=today');

    return (
        <Page
            title="Today's Sets"
            action={
                <Ionicons
                    name={'md-add'}
                    size={35}
                    color={colors.action}
                    onTouchStart={() =>
                        navigation.navigate(RouteNames.ADD_SCHEDULED_TEST)
                    }
                />
            }
        >
            <ScrollView style={{width: '100%'}}>
                {trainings.map((training) => (
                    <ScheduledTestCard
                        key={training.id}
                        navigation={navigation}
                        test={training.test}
                    />
                ))}
            </ScrollView>
        </Page>
    );
};

export default TodaysTrainingsScreen;
