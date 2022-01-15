import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

import Api from './src/Services/Api';
import Navigation from './src/Services/Navigation';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screen/login/index';
import HomeScreen from './src/screen/home/index';
import { RootStackParamList } from './src/screen/RootStackParams'

import { styles } from './src/screen/styles';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  Api.Instance;
  Navigation.Instance;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
