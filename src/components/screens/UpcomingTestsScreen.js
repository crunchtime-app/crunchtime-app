import React from 'react';
import {View, Text} from 'react-native';
import {Title, Page, Panel, Card} from '../common';
import {FlashCardFlowScreen} from '../modals';

const UpcomingTestsScreen = ({navigation}) => {
    return (
        <Page title="Upcoming Tests">
            <Card onTouchStart={() => navigation.navigate('Flash Card Session')}>
                <Text>Hello</Text>
            </Card>
        </Page>
    );
};

export default UpcomingTestsScreen;
