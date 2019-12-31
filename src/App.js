import React from 'react';
import { StyleSheet, Text, View } from "react-native";

import './App.css';

function App() {
  return (
    <View style={styles.root}>
      <Text>CookWithMeTV</Text>
      <Text>v1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 root: {
   justifyContent: 'center',
   alignItems: 'center'
 }
});

export default App;
