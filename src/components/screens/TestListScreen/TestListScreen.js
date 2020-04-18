import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import dayjs from 'dayjs';
import {Ionicons} from '@expo/vector-icons';

import {Page} from '../../common';
import {colors} from '../../../resources';
import RouteNames from '../../navigation/RouteNames';
import {axios} from '../../../services';

import ScheduledTestCard from './ScheduledTestCard';

const mockTests = [
    {
        date: dayjs().add(7, 'day'),
        name: 'Physics',
        id: '111',
    },
    {
        date: dayjs().add(5, 'day'),
        name: 'Viruses',
        id: '112',
    },
    {
        date: dayjs().add(2, 'day'),
        name: 'Lists',
        id: '113',
    },
];

const UpcomingTestsScreen = ({navigation}) => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        const fetchTests = async () => {
            const result = await axios('/api/tests', {
                headers: {
                    authorization:
                        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjAsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsIm5hbWUiOm51bGwsImNyZWF0aW9uX2RhdGUiOiIyMDIwLTA0LTE4VDAxOjE5OjE5LjEzNTQ0MyIsInRlc3RzIjpbXX0.lKWl_wliCYhdz9RwPYHJF_3IYbCZWorHIrTXqptjI14',
                },
            });
            setTests(result.data);
        };

        fetchTests();
    }, []);

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
