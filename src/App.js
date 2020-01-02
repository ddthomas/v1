import React from 'react';
import { StyleSheet, Text, View } from "react-native";

import './App.css';

const Mux = require('@mux/mux-node');
const { Video, Data } = new Mux("4afee5d3-8384-4a09-b67a-365e9a41caf8", "Yl+lU10Wg+JPSWmEYsPUp9ATBt0SXmIxRzKHXfeIf1kZd9auO+SObJlKrFkBM6ub3XK8dZQVTJc");

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
