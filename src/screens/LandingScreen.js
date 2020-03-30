import React from 'react';
import {Title, Page, Panel, Card} from '../components'


const LandingScreen = () => {
    return (
        <Page colorful>
            <Panel>
                <Title>Upcoming tests</Title>
                <Card><Title>hello there</Title></Card>
            </Panel>
        </Page>
    );
}

export default LandingScreen;