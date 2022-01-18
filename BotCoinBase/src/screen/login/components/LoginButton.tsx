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
  setActivityIndicator: Dispatch<SetStateAction<boolean>>;
}> {
  render() {
    const apiCoin = Api.Instance;

    return (
      <View style={this.props.styleView}>
        <Button
          styleButton = {styles.Button}
          styleText = {styles.Text}
          titleButton = "login"
          onPressButton = { () => {
            if (this.props.api_key == '' || this.props.secret_key == '') {
              apiCoin.ApiKey = autoLogin.api_key;
              apiCoin.SecretKey = autoLogin.secret_key;
            } else {
              apiCoin.ApiKey = this.props.api_key;
              apiCoin.SecretKey = this.props.secret_key;
            }

            this.props.setActivityIndicator(true);

            apiCoin.User().then((User) => {
              if (User.errors !== undefined) {
                for (let index = 0; index < User.errors.length; index++) {
                  const element = User.errors[index];
                  this.props.setLoginError(this.props.loginError + element.message + '\n');
                }
              } else {
                this.props.setActivityIndicator(false);
                Navigation.Instance.navigate('Home', User.data);
              }
            });
          }}
        />
      </View>
    );
  }
}

export default LoginButton;