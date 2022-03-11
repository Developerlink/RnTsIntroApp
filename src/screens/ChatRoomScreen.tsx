import React, {useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import {RootStackScreenProps} from '../navigation/types';

export default function ChatRoomScreen({
  navigation,
  route,
}: RootStackScreenProps<'ChatRoom'>) {
  let roomId: number = 0;
  if (route.params?.roomId) {
    roomId = route.params.roomId;
  }

  useEffect(() => {}, []);

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.screen}>
        <Text>Chat Room Screen</Text>
        <Text>Room id: {roomId}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {flexGrow: 1, alignItems: 'center', justifyContent: 'center'},
});
