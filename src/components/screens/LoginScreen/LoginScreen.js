import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

import {RouteNames} from '../../navigation';
import {colors} from '../../../resources';
import {Page, BaseCard, Button} from '../../common';
import {TextInput, Label, InputRow} from '../../common/form';

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

const LoginScreen = () => {
    const navigation = useNavigation();
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    return (
        <Page title="CrunchTime">
            <Card>
                <InputRow>
                    <Label>Email</Label>
                    <TextInput
                        value={emailInput}
                        onChangeText={(val) => setEmailInput(val)}
                        placeholder="user@email.com"
                    />
                </InputRow>
                <InputRow>
                    <Label>Password</Label>
                    <TextInput
                        value={passwordInput}
                        onChangeText={(val) => setPasswordInput(val)}
                        placeholder="******"
                    />
                </InputRow>
                <InputRow>
                    <Button onPress={() => navigation.navigate(RouteNames.TAB_NAV)}>Login</Button>
                    <Button onPress={() => navigation.navigate(RouteNames.TAB_NAV)} primary>
                        Signup
                    </Button>
                </InputRow>
            </Card>
        </Page>
    );
};

export default LoginScreen;
