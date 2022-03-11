import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import {RootStackScreenProps} from '../navigation/types';

export default function ProfileScreen({
  navigation,
  route,
}: RootStackScreenProps<'Profile'>) {
  let {userId} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.screen}>
        <Text>Profile Screen</Text>
        <Text>UserId: {userId}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {flexGrow: 1, alignItems: 'center', justifyContent: 'center'},
});
