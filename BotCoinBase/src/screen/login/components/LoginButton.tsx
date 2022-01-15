import React, { Component, SetStateAction, Dispatch } from 'react';
import { View, StyleProp, TextStyle } from 'react-native';

import Navigation from '../../../Services/Navigation';

import Button from '../../../components/Button';
import { styles } from '../styles';

import Api from '../../../Services/Api';

import autoLogin from '../autoLogin';

class LoginButton extends Component<{
  styleView?: StyleProp<TextStyle>;
  api_key: string;
  secret_key: string;
  loginError: string;
  setLoginError: Dispatch<SetStateAction<string>>;
}> {
  render() {
    const apiCoin = Api.Instance;

    return (
      <View style={this.props.styleView}>
        <Button
          styleButton = {styles.Button}
          styleText = {styles.Text}
          titleButton = "login"
          onPressButton = { async () => {
            if (this.props.api_key == '' || this.props.secret_key == '') {
              apiCoin.ApiKey = autoLogin.api_key;
              apiCoin.SecretKey = autoLogin.secret_key;
            } else {
              apiCoin.ApiKey = this.props.api_key;
              apiCoin.SecretKey = this.props.secret_key;
            }

            const User = await apiCoin.User();

            if (User.errors !== undefined) {
              for (let index = 0; index < User.errors.length; index++) {
                const element = User.errors[index];
                this.props.setLoginError(this.props.loginError + element.message + '\n');
              }
            } else {
              Navigation.Instance.navigate('Home');
            }
          }}
        />
      </View>
    );
  }
}

export default LoginButton;