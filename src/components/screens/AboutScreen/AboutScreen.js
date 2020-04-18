import React from 'react';
import styled from 'styled-components/native';

import {colors} from '../../../resources';
import {Page, BaseCard, Button} from '../../common';
import {TokenContext} from '../../../state';

const Card = styled(BaseCard)`
    flex-direction: column;
    padding: 15px;
`;
const BodyText = styled.Text`
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
    color: ${colors.body};
`;
const Em = styled.Text`
    font-weight: bold;
`;

const AboutScreen = () => {
    const {clearToken} = React.useContext(TokenContext);
    const handleLogout = async () => {
        console.log('clearing token....');
        await clearToken();
        console.log('token cleared?');
    };

    return (
        <Page title="About CrunchTime">
            <Card>
                <BodyText>
                    When your study sessions are spaced out, your brain will
                    remember more and retain information for longer. This effect
                    is known as <Em>the spacing effect</Em> and it has been
                    scientifically proven. In fact, scientists have been
                    conducting studies which re-affirm the spacing effect for
                    over 40 years.
                </BodyText>
                <BodyText>
                    That's where CrunchTime comes into play; CrunchTime will
                    help you study and help you achieve better grades by helping
                    you study regularly.
                </BodyText>
            </Card>
            <Card>
                <Button onPress={() => handleLogout()}>Logout</Button>
            </Card>
        </Page>
    );
};

export default AboutScreen;
