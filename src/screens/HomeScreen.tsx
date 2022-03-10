import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import squares from '../utils/squares';

export default function HomeScreen() {
  interface Person {
    firstName: string;
    lastName: string;
    age?: number;
  }

  function showFullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
  }

  function makePerson(name: string, surname: string): Person {
    const result = {
      firstName: name,
      lastName: surname,
    };
    return result;
  }

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.screen}>
        <Text>Home Screen</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {flexGrow: 1, alignItems: 'center', justifyContent: 'center'},
});
