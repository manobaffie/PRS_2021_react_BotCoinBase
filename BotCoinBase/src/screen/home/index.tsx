import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../RootStackParams'

import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'

import { styles } from './styles'

import Api from '../../logics/api';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {

  const navigation = useNavigation<authScreenProp>();

  return (
    <View style={styles.MainView}>
      <View style={styles.View}>
        <Text>this is a home page</Text>

        <CustomButton
          titleButton = "test User"
          onPressButton = { () => {

            const apiCoin = Api.Instance;
            console.log(apiCoin.User());

            // navigation.navigate('Login');
          }}
        />

      </View>
    </View>
  );
}

export default HomeScreen;