import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Contact extends Component {
  static navigationsOption = {
    title: 'Contact',
  };
  render() {
    return (
      <View>
        <Text> my contact component </Text>
      </View>
    );
  }
}
