import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import CustomInput from '../components/customInput'

class LoginScreen extends Component {
  render() {
    const CustomInputStyle = StyleSheet.create({
      input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
      },
      text: {
        fontSize: 10,
        marginVertical: 12,
      },
    });

    return (
        <View style={{
          marginVertical: 100,
          borderWidth: 1,
          flex: 1,
          padding: 70,
          justifyContent: "center",
          alignItems: "center",
        }}>

        <CustomInput 
          la  bel = "enter the api key :"
          placeholder = "api Key"

          onChangeTextInput = { (text: string) => { 
            console.log(text); 
          }}

          styleInput = {CustomInputStyle.input}
          styleText = {CustomInputStyle.text}
        />

      </View>
    );
  }
}

export default LoginScreen;