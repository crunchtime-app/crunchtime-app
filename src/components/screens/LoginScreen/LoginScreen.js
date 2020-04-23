import React, {useState, useContext} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Page, Button} from '../../common';
import {TextInput, Label, InputRow} from '../../common/form';
import axios from '../../../services';
import {TokenContext} from '../../../state';

const Container = styled.View`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const AppTitle = styled.Text`
    font-size: 48px;
    color: #fff;
    font-weight: 700;
    margin: 100px auto;
`;

const LoginScreen = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [isLogin, setLogin] = useState(true);
    const {storeToken} = useContext(TokenContext);

    const handleButton = async () => {
        let uri = isLogin ? '/api/authentication' : '/api/users';

        try {
            const result = await axios.post(uri, {
                email: emailInput,
                password: passwordInput,
                name: nameInput, // ignored on server for auth requests
            });

            const token = result.data.token;
            await storeToken(token);
        } catch (err) {
            console.log('Error message goes here', err);
        }
    };

    return (
        <Page>
            <KeyboardAwareScrollView style={{width: '100%'}}>
                <AppTitle>CrunchTime</AppTitle>
                <Container>
                    <View>
                        <InputRow>
                            <Label light="true">Email</Label>
                            <TextInput
                                value={emailInput}
                                onChangeText={(val) => setEmailInput(val)}
                                placeholder="Enter your email"
                            />
                        </InputRow>
                        <InputRow>
                            <Label>Password</Label>
                            <TextInput
                                value={passwordInput}
                                secureTextEntry={true}
                                onChangeText={(val) => setPasswordInput(val)}
                                placeholder="Enter your password"
                            />
                        </InputRow>
                        {!isLogin && (
                            <InputRow>
                                <Label>Name</Label>
                                <TextInput
                                    value={nameInput}
                                    onChangeText={(val) => setNameInput(val)}
                                    placeholder="Enter your name"
                                />
                            </InputRow>
                        )}
                    </View>
                    <View>
                        <InputRow>
                            <Button
                                primary="true"
                                onPress={() => handleButton()}
                            >
                                {isLogin ? 'LOG IN' : 'SIGN UP'}
                            </Button>
                            <Button onPress={() => setLogin(!isLogin)}>
                                {!isLogin ? 'LOG IN' : 'SIGN UP'}
                            </Button>
                        </InputRow>
                    </View>
                </Container>
            </KeyboardAwareScrollView>
        </Page>
    );
};

export default LoginScreen;
