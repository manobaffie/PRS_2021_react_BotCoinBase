import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';

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

  const apiCoin = Api.Instance;

  const [user, setUser] = useState();
  const [userImage, setUserImage] = useState('https://www.handiclubnimois.fr/wp-content/uploads/2020/10/blank-profile-picture-973460_1280.png');

  useEffect(() => {
    apiCoin.User().then(({data}) => {
      console.log('called');
      setUser(data);
      setUserImage(data.avatar_url);
      console.log('data.avatar_url: ', data.avatar_url);
    });
  }, [])

  console.log(userImage);

  return (
    <View style={styles.MainView}>
      <View style={styles.View}>
        <Image
            style={styles.profileImage}
            source={{uri: userImage}}
        />

        <CustomButton
          titleButton = "test User"
          onPressButton = { () => {
            // navigation.navigate('Login');
          }}
        />

      </View>
    </View>
  );
}

export default HomeScreen;