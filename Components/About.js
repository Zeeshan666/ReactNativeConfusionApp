import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class About extends Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <View>
        <Text> About Componnt </Text>
      </View>
    );
  }
}
