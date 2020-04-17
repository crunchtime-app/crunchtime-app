import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {RouteNames} from '../../navigation';
import {Page, Button} from '../../common';
import {TextInput, Label, InputRow} from '../../common/form';
import {axios} from '../../../services';
import {useStateValue, saveToken} from '../../../state';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [{}, dispatch] = useStateValue();

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
        try {
            const result = await axios.post('/api/users', {
                email: emailInput,
                password: passwordInput,
            });
            dispatch({type: 'saveToken', token: result.data.token});
            navigation.navigate(RouteNames.TAB_NAV);
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
