import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  Text,
  ToastAndroid,
} from 'react-native';

import Menu from './Menu';
import Contact from './Contact';
import About from './About';
import Dishdetail from './Dishdetail';
import Home from './Home';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import ReservationComponents from './ReservationComponents';
import FavoriteComponent from './FavoriteComponent';
import Login from './Login';
import Location from './Location';

import NetInfo from '@react-native-community/netinfo';
import {Icon} from 'react-native-elements';
import {
  fetchComments,
  fetchDishes,
  fetchLeaders,
  fetchPromos,
} from '../redux/ActionCreators';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
});

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <View style={styles.drawerHeader}>
        <View style={{flex: 1}}>
          <Image
            source={require('./images/logo.png')}
            style={styles.drawerImage}
          />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Ristorante Con</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);
const LoginNavigator = createStackNavigator(
  {
    Login: {screen: Login},
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
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          iconStyle={{color: 'white'}}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  },
);
const MenuNavigator = createStackNavigator(
  {
    Menu: {
      screen: Menu,
    },
    Dishdetail: {
      screen: Dishdetail,
    },
  },
  {
    initialRouteName: 'Menu',
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: 'red',
      },

      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
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
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="white"
          type="ionicons"
          onPress={() => navigation.toggleDrawer()}
        />
      ),

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
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  },
);
const LocationNavigator = createStackNavigator(
  {
    Location: {screen: Location},
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
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  },
);
const ReservationNavigator = createStackNavigator(
  {
    ReservationComponents: {screen: ReservationComponents},
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
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
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
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  },
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: {screen: FavoriteComponent},
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
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          iconStyle={{color: 'white'}}
          onPress={() => navigation.navigate('DrawerToggle')}
        />
      ),
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
        drawerIcon: ({tintColor, focused}) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu',
        drawerIcon: ({tintColor, focused}) => (
          <Icon name="list" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        title: 'About',
        drawerLabel: 'About Us',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="info-circle"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },

    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title: 'Contact Us',
        drawerLabel: 'Contact Us',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="address-card"
            type="font-awesome"
            size={22}
            color={tintColor}
          />
        ),
      },
    },
    Login: {
      screen: LoginNavigator,
      navigationOptions: {
        title: 'Login',
        drawerLabel: 'Login',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="sign-in"
            type="font-awesome"
            size={24}
            iconStyle={{color: tintColor}}
          />
        ),
      },
    },
    Location: {
      screen: LocationNavigator,
      navigationOptions: {
        title: 'Location',
        drawerLabel: 'Location',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="street-view"
            type="font-awesome"
            size={24}
            iconStyle={{color: tintColor}}
          />
        ),
      },
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        title: 'My Favorites',
        drawerLabel: 'My Favorites',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="heart"
            type="font-awesome"
            size={24}
            iconStyle={{color: tintColor}}
          />
        ),
      },
    },
    ReservationComponents: {
      screen: ReservationNavigator,
      navigationOptions: {
        title: 'Reservation',
        drawerLabel: 'Reservation Table',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="cutlery"
            type="font-awesome"
            size={22}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    drawerBackgroundColor: '#D1C4E9',
    // drawerPosition: 'right',
    // drawerType: 'front',
    drawerLockMode: 'unlocked',
    drawerWidth: 200,
    contentComponent: CustomDrawerContentComponent,
  },
);

const Myapp = createAppContainer(MainNavigator);
export class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    NetInfo.getConnectionInfo().then(connectionInfo => {
      ToastAndroid.show(
        'Initial Network Connectivity Type: ' +
          connectionInfo.type +
          ', effectiveType: ' +
          connectionInfo.effectiveType,
        ToastAndroid.LONG,
      );
    });

    NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
  }
  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange,
    );
  }
  handleConnectivityChange = connectionInfo => {
    switch (connectionInfo.type) {
      case 'none':
        ToastAndroid.show('You are now offline!', ToastAndroid.LONG);
        break;
      case 'wifi':
        ToastAndroid.show('You are now connected to WiFi!', ToastAndroid.LONG);
        break;
      case 'cellular':
        ToastAndroid.show(
          'You are now connected to Cellular!',
          ToastAndroid.LONG,
        );
        break;
      case 'unknown':
        ToastAndroid.show(
          'You now have unknown connection!',
          ToastAndroid.LONG,
        );
        break;
      default:
        break;
    }
  };

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

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerImage: {
    margin: 10,
    width: 40,
    height: 40,
  },
});
