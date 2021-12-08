import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import stylesMain from './src/theme/fonts'
import LoginScreen from './src/screen/login';

export default function App() {
  return (
    <View style={stylesMain.container}>

      <LoginScreen/>

      <StatusBar style="auto" />
    </View>
  );
}
