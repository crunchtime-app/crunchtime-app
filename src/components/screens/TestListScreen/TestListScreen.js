import React, {useState, useEffect, useContext} from 'react';
import {ScrollView} from 'react-native';
import dayjs from 'dayjs';
import {Ionicons} from '@expo/vector-icons';

import {Page} from '../../common';
import {colors} from '../../../resources';
import RouteNames from '../../navigation/RouteNames';
import {axios} from '../../../services';
import {TokenContext} from '../../../state';

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
    const {token} = React.useContext(TokenContext);

    useEffect(() => {
        const fetchTests = async () => {
            const result = await axios('/api/tests', {
                headers: {authorization: token},
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
