import React, {Component} from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import Menu from '../Components/Menu';
import Contact from '../Components/Contact';
import About from '../Components/About';
import Dishdetail from './Dishdetail';
import Home from './Home';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

const MenuNavigator = createStackNavigator(
  {
    Menu: {
      screen: Menu,
    },
    Dishdetail: {
      screen: Dishdetail,
    },
    Contact: {
      screen: Contact,
    },
    About: {
      screen: About,
    },
  },
  {
    initialRouteName: 'Menu',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#512DA8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
);
const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  navigationOptions: ({navigate}) => ({
    headerStyle: {
      backgroundColor: '#512DA8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
    },
  }),
});

const MainNavigator = createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      title: 'Home',
      drawerLabel: 'Home',
    },
  },
  Menu: {
    screen: MenuNavigator,
    navigationOptions: {
      title: 'Menu',
      drawerLabel: 'Menu',
    },
  }

},{
    drawerBackgroundColor:"#D1C4E9"
  }
);
const Myapp = createAppContainer(MainNavigator);
export class Main extends Component {
  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 0 : 1,
        }}>
        <Myapp />
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
