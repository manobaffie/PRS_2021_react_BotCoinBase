import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import LoginScreen from './src/screen/login/index';
import { styles } from './src/screen/styles';

export default function App() {
  return (
    <View style={styles.View}>

      <LoginScreen/>

      <StatusBar style="auto" />
    </View>
  );
}
