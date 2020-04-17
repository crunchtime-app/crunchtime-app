import React, {useState} from 'react';
// import {useStore} from 'react-redux';
import {ScrollView} from 'react-native';
import dayjs from 'dayjs';
import {Ionicons} from '@expo/vector-icons';

import {Page} from '../../common';
import {colors} from '../../../resources';

import ScheduledTestCard from './ScheduledTestCard';
import RouteNames from '../../navigation/RouteNames';

import {useStateValue} from '../../../state';

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

const UpcomingTestsScreen = ({tests = mockTests, navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    console.log('hello');
    // console.log(useStore().getState());

    const [{token}, dispatch] = useStateValue();
    console.log(token);

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
