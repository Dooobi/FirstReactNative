import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlexDimensionsBasics from './components/FlexDimensionsBasics.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlexDimensionsBasics/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
