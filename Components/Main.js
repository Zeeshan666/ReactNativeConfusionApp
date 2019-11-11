import React, {Component} from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import Menu from './Menu';
import Contact from './Contact';
import About from './About';
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
    // Contact: {
    //   screen: Contact,
    // },
    // About: {
    //   screen: About,
    // },
  },
  {
    initialRouteName: 'Menu',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'red',
      },

      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
);

const HomeNavigator = createStackNavigator(
  {
    Home: {screen: Home},
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTitleStyle: {
        color: '#fff',
      },

      headerTintColor: '#fff',
    }),
  },
);
const ContactNavigator = createStackNavigator(
  {
    Contact: {screen: Contact},
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: 'pink',
      },
      headerTitleStyle: {
        color: 'red',
      },
      headerTintColor: '#fff',
    }),
  },
);
const AboutNavigator = createStackNavigator(
  {
    About: {screen: About},
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#512DA8',
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
    }),
  },
);

const MainNavigator = createDrawerNavigator(
  {
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
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        title: 'About',
        drawerLabel: 'About Us',
      },
    },

    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title: 'Contact Us',
        drawerLabel: 'Contact Us',
      },
    },
  },
  {
    drawerBackgroundColor: '#fff',
    // drawerPosition: 'right',
    // drawerType: 'front',
    drawerLockMode: 'unlocked',
    drawerWidth: 200,
  },
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
