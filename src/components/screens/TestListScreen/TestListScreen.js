import React from 'react';
import dayjs from 'dayjs';

import {Page} from '../../common';
import ScheduledTestCard from './ScheduledTestCard';

const mockTests = [
    {
        date: dayjs().add(7, 'day'),
        name: 'Physics',
        id: '111'
    },
    {
        date: dayjs().add(7, 'day'),
        name: 'Viruses',
        id: '112'
    },
    {
        date: dayjs().add(7, 'day'),
        name: 'Lists',
        id: '113'
    }
];

const UpcomingTestsScreen = ({tests = mockTests, navigation}) => {
    return (
        <Page title="Upcoming Tests">
            {tests.map(test => (
                <ScheduledTestCard key={test.id} navigation={navigation} test={test} />
            ))}
        </Page>
    );
};

export default UpcomingTestsScreen;
