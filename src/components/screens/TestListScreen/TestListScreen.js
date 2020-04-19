import React, {useState, useEffect, useContext} from 'react';
import {ScrollView} from 'react-native';
import dayjs from 'dayjs';
import {Ionicons} from '@expo/vector-icons';

import {Page} from '../../common';
import {colors} from '../../../resources';
import RouteNames from '../../navigation/RouteNames';
import axios, {useGetEndpoint} from '../../../services';

import ScheduledTestCard from './ScheduledTestCard';

const UpcomingTestsScreen = ({navigation, route}) => {
    const [tests, setTests] = useGetEndpoint('/api/tests');

    useEffect(() => {
        if (route.params?.newTest) {
            setTests([...tests, route.params.newTest])
        }
    }, [route.params?.newTest]);

    return (
        <Page
            title="Home"
            action={
                <Ionicons
                    name={'md-add-circle'}
                    size={35}
                    color={colors.white}
                    onTouchStart={() =>
                        navigation.navigate(RouteNames.ADD_SCHEDULED_TEST)
                    }
                />
            }
        >
            <ScrollView style={{width: '100%'}}>
                {tests.map((test) => (
                    <ScheduledTestCard
                        key={test.id}
                        navigation={navigation}
                        test={test}
                    />
                ))}
            </ScrollView>
        </Page>
    );
};

export default UpcomingTestsScreen;
