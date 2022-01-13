import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'

import { styles } from './styles'

import Api from '../../logics/api';

const LoginScreen = () => {

  const [api, setApi] = useState(new Api({api_key: '', secret_key: ''}));
  const [api_key, setApi_key] = useState('');
  const [secret_key, setSecret_key] = useState('');

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
          onPressButton = { () => {
            setApi(new Api({api_key: api_key, secret_key: secret_key}));
            api.User()
          }}
        />

      </View>
    </View>
  );
}

export default LoginScreen;