import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../RootStackParams'

import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'

import { styles } from './styles'

import Api from '../../logics/api';


type authScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {

  const navigation = useNavigation<authScreenProp>();

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
            const apiCoin = Api.Instance;

            apiCoin.ApiKey = api_key;
            apiCoin.SecretKey = secret_key;

            navigation.navigate('Home');
          }}
        />

      </View>
    </View>
  );
}

export default LoginScreen;