import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'

import { styles } from './styles'

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.View}>

        <CustomInput
          styleInput = {styles.Input}
          styleText = {styles.Text}
          label = "API key"
          placeholder = "key"
          onChangeTextInput = { (text: string) => { 
            console.log(text); 
          }}
        />
        <CustomButton
          styleButton = {styles.Button}
          styleText = {styles.Text}
          titleButton = {"test button "}
          onPressButton = { () => { console.log('test'); }}
        />

      </View>
    );
  }
}

export default LoginScreen;