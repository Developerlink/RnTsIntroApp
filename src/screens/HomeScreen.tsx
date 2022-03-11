import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import {RootStackScreenProps} from '../navigation/types';

export default function HomeScreen({
  navigation,
  route,
}: RootStackScreenProps<'Home'> | any) {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.screen}>
        <Text>Home Screen</Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login', {userId: 'u12'})}
        />
        <Button
          title="Chat Room"
          onPress={() => navigation.navigate('ChatRoom', {roomId: 111})}
        />
        <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile', {userId: 'u12'})}
        />
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {flexGrow: 1, alignItems: 'center', justifyContent: 'space-evenly'},
});
