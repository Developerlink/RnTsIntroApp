import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{title: 'Chat Room'}}
        initialParams={{roomId: 453}}
      />
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
      />
      <RootStack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{userId: 'u12'}}
      />
      <RootStack.Screen name="Settings" component={SettingsScreen} />
    </RootStack.Navigator>
  );
}
