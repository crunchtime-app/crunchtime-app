import React, {useState, useContext} from 'react';

import {Page, Button} from '../../common';
import {TextInput, Label, InputRow} from '../../common/form';
import {axios} from '../../../services';
import {TokenContext} from '../../../state';

const LoginScreen = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const {storeToken} = useContext(TokenContext);

    const handleLogin = async () => {
        try {
            const result = await axios.post('/api/authentication', {
                email: emailInput,
                password: passwordInput,
            });

            const token = result.data.token;
            await storeToken(token);
            // await storeToken(token);
            // navigation.navigate(RouteNames.TAB_NAV);
        } catch (err) {
            console.log('Error message goes here', err);
        }
    };

    const handleSignup = async () => {
        try {
            const result = await axios.post('/api/users', {
                email: emailInput,
                password: passwordInput,
            });

            const token = result.data.token;
            await storeToken(token);
        } catch (err) {
            console.log('Error message goes here', err);
        }
    };

    return (
        <Page>
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
                    secureTextEntry={true}
                    onChangeText={(val) => setPasswordInput(val)}
                    placeholder="******"
                />
            </InputRow>
            <InputRow>
                <Button onPress={() => handleLogin()}>Login</Button>
                <Button onPress={() => handleSignup()} primary>
                    Signup
                </Button>
            </InputRow>
        </Page>
    );
};

export default LoginScreen;
