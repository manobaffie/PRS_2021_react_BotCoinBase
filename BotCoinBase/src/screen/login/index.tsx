import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Navigation from '../../Services/Navigation';

import Input from '../../components/Input';
import ActivityIndicator from '../../components/ActivityIndicator';
import LoginButton from './components/LoginButton';

import { styles } from './styles';

const LoginScreen = () => {

  Navigation.Instance.me('Login');

  const [api_key, setApi_key] = useState('');
  const [secret_key, setSecret_key] = useState('');

  const [loginError, setLoginError] = useState('');

  const [activityIndicator, setActivityIndicator] = useState(false);

  return (
    <View style={styles.MainView}>
      <View style={styles.View}>
        <Input
          styleInput = {styles.Input}
          styleText = {styles.Text}
          label = "api key"
          placeholder = "Key"
          onChangeTextInput = {(text: string) => setApi_key(text)}
        />

        <Input
          styleInput = {styles.Input}
          styleText = {styles.Text}
          label = "secret key"
          placeholder = "Key"
          onChangeTextInput = {(text: string) => setSecret_key(text)}
        />

        <LoginButton
          api_key = {api_key}
          secret_key= {secret_key}
          loginError= {loginError}
          setLoginError={setLoginError}
          setActivityIndicator={setActivityIndicator}
        />

        <ActivityIndicator
          styleView = {styles.ActivityIndicator}
          isDisplay = {activityIndicator}
        />
 
        <Text style={styles.TextError}>{loginError}</Text>
      </View>
    </View>
  );
}

export default LoginScreen;