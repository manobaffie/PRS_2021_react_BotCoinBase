import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, ActivityIndicator } from 'react-native';

import Navigation from '../../Services/Navigation';

import { styles } from './styles';

import Api from '../../Services/Api';

const HomeScreen = () => {
  Navigation.Instance.me('Home');

  const apiCoin = Api.Instance;

  const [user, setUser] = useState();
  const [userImage, setUserImage] = useState('https://www.handiclubnimois.fr/wp-content/uploads/2020/10/blank-profile-picture-973460_1280.png');

  useEffect(() => {
    apiCoin.User().then(({data}) => {
      setUser(data);
      setUserImage(data.avatar_url);
    });
  }, [])

  return (
    <View style={styles.MainView}>
        {
          (user === undefined) ? (
            <View style={styles.View}>
              <ActivityIndicator size='large' color='#457cb7' />
            </View>
          ) : (
            <View style={styles.View}>

              <View style={{ backgroundColor: "skyblue" }}>
                <Text>this is a test 2</Text>

                <Image
                  style={styles.profileImage}
                  source={{uri: userImage}}
                />
              </View>
            </View>
          )
        }
    </View>
  );
}

export default HomeScreen;