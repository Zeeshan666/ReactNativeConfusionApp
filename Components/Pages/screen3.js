import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class screen3 extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> Screen 3 </Text>
      </View>
    );
  }
}

export default screen3;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
