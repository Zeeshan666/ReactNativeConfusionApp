import React, {Component} from 'react';

import {Text, View} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Communications from 'react-native-communications';
export default class Contact extends Component {
  static navigationOptions = {
    title: 'Contact  ',
  };

  phoneCall = () => {
    Communications.phonecall('03232763766', true);
  };
  sendMail = () => {
    Communications.email(
      [],
      null,
      null,
      'Demo Subject',
      'Demo Content for the mail',
    );
  };
  messageUs = () => {
    Communications.text('0123456789', 'Test Text Here');
  };
  render() {
    return (
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <Card title="Contact Information">
          <View>
            <Text style={{margin: 10}}>121, Clear Water Bay Road</Text>
            <Text style={{margin: 10}}>Clear Water Bay, Kowloon</Text>
            <Text style={{margin: 10}}>HONG KONG</Text>
            <Text style={{margin: 10}}>Tel: +852 1234 5678</Text>
            <Text style={{margin: 10}}>Fax: +852 8765 4321</Text>
            <Text style={{margin: 10}}>Email:confusion@food.net</Text>
          </View>
          <Button
            title="Send Email"
            buttonStyle={{backgroundColor: '#512DA8'}}
            icon={<Icon name="envelope-o" type="font-awesome" color="white" />}
            onPress={this.sendMail}
          />
          <Button
            title="call us"
            buttonStyle={{backgroundColor: 'red'}}
            icon={<Icon name="phone" type="font-awesome" color="white" />}
            onPress={this.phoneCall}
            containerStyle={{
              marginVertical: 10,
            }}
          />
          <Button
            title="Message"
            buttonStyle={{backgroundColor: 'green'}}
            icon={<Icon name="sms" type="font-awesome" color="white" />}
            onPress={this.messageUs}
            containerStyle={{
              marginVertical: 10,
            }}
          />
        </Card>
      </Animatable.View>
    );
  }
}
