import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStackNavigator from './src/navigation/HomeStackNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor="black" />
      <HomeStackNavigator />
    </NavigationContainer>
  );
}
