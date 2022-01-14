import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../RootStackParams'

import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'

import { styles } from './styles'

import Api from '../../logics/api';

import autoLogin from './autoLogin'

type authScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<authScreenProp>();

  const apiCoin = Api.Instance;

  const [api_key, setApi_key] = useState('');
  const [secret_key, setSecret_key] = useState('');

  const [loginError, setLoginError] = useState('');

  return (
    <View style={styles.MainView}>
      <View style={styles.View}>
        <CustomInput
          styleInput = {styles.Input}
          styleText = {styles.Text}
          label = "api key"
          placeholder = "Key"
          onChangeTextInput = {(text: string) => setApi_key(text)}
        />

        <CustomInput
          styleInput = {styles.Input}
          styleText = {styles.Text}
          label = "secret key"
          placeholder = "Key"
          onChangeTextInput = {(text: string) => setSecret_key(text)}
        />

        <CustomButton
          styleButton = {styles.Button}
          styleText = {styles.Text}
          titleButton = "login"
          onPressButton = { async () => {
            if (api_key == '' || secret_key == '') {
              apiCoin.ApiKey = autoLogin.api_key;
              apiCoin.SecretKey = autoLogin.secret_key;
            } else {
              apiCoin.ApiKey = api_key;
              apiCoin.SecretKey = secret_key;
            }

            const User = await apiCoin.User();

            if (User.errors !== undefined) {
              for (let index = 0; index < User.errors.length; index++) {
                const element = User.errors[index];
                setLoginError(loginError + element.message + '\n');
              }
            } else {
              navigation.navigate('Home');
            }
          }}
        />
        <Text style={styles.TextError}>{loginError}</Text>
      </View>
    </View>
  );
}

export default LoginScreen;