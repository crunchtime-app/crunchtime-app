import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

import {RouteNames} from '../../navigation';
import {Page, BaseCard, Button} from '../../common';
import {TextInput, Label, InputRow} from '../../common/form';
import {axios} from '../../../services';

const Card = styled(BaseCard)`
    flex-direction: column;
    padding: 15px;
    margin-top: 100px;
`;

const LoginScreen = () => {
    const navigation = useNavigation();
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handleLogin = async () => {
        const result = await axios.post('/api/authentication', {
            email: emailInput,
            password: passwordInput,
        });

        if (result.status == 200) {
            // set global state
            navigation.navigate(RouteNames.TAB_NAV);
        } else {
            console.log('error message goes here');
        }
    };

    const handleSignup = async () => {
        const result = await axios.post('/api/users', {
            email: emailInput,
            password: passwordInput,
        });
    };

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
                    <Button onPress={() => handleLogin()}>Login</Button>
                    <Button
                        onPress={() => navigation.navigate(RouteNames.TAB_NAV)}
                        primary
                    >
                        Signup
                    </Button>
                </InputRow>
            </Card>
        </Page>
    );
};

export default LoginScreen;
