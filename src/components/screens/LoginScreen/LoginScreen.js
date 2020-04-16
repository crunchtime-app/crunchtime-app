import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';

import {RouteNames} from '../../navigation';
import {Page, BaseCard, Button} from '../../common';
import {TextInput, Label, InputRow} from '../../common/form';
import {axios} from '../../../services';
import {saveToken} from '../../../state/reducers/authReducer';

const Card = styled(BaseCard)`
    flex-direction: column;
    padding: 15px;
    margin-top: 100px;
`;

const LoginScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handleLogin = async () => {
        try {
            const result = await axios.post('/api/authentication', {
                email: emailInput,
                password: passwordInput,
            });
            dispatch(saveToken(result.data.token));
            navigation.navigate(RouteNames.TAB_NAV);
        } catch (err) {
            console.log('Error message goes here', err);
        }
    };

    const handleSignup = async () => {
        const result = await axios.post('/api/users', {
            email: emailInput,
            password: passwordInput,
        });
    };

    return (
        <Page>
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
                        secureTextEntry={true}
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
