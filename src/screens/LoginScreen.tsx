import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import { RootStackScreenProps } from '../navigation/types';

export default function LoginScreen({navigation, route}: RootStackScreenProps<"Login">) {
  let userId: string | undefined;
  if (route.params?.userId) {
    userId = route.params.userId;
  }

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.screen}>
        <Text>Login Screen</Text>
        {userId && <Text>UserId: {userId}</Text>}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {flexGrow: 1, alignItems: 'center', justifyContent: 'center'},
});
