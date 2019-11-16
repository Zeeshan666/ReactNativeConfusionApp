import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loadingText: {
    color: '#512DA8',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

import React, {Component} from 'react';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator size="large" color="#512DA8" />
        <Text style={styles.loadingText}>Loading . . .</Text>
      </View>
    );
  }
}
