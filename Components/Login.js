import React, {Component} from 'react';
import {View, StyleSheet, Image, ScrollView, Text} from 'react-native';
import {Icon, Input, CheckBox, Button} from 'react-native-elements';
import {AsyncStorage} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ImagePicker from 'react-native-image-picker';
import {baseUrl} from '../shared/baseUrl';
import ImageEditor from '@react-native-community/image-editor';
class LoginTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      remember: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('userinfo').then(userdata => {
      let userinfo = JSON.parse(userdata);
      if (userinfo) {
        this.setState({username: userinfo.username});
        this.setState({password: userinfo.password});
        this.setState({remember: true});
      }
    });
  }

  static navigationOptions = {
    title: 'Login',
    tabBarIcon: ({tintColor}) => (
      <Icon
        name="sign-in"
        type="font-awesome"
        size={24}
        iconStyle={{color: tintColor}}
      />
    ),
  };
  handleLogin() {
    console.log(JSON.stringify(this.state));
    if (this.state.remember)
      AsyncStorage.setItem(
        'userinfo',
        JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      ).catch(error => console.log('Could not save user info', error));
    else
      AsyncStorage.removeItem('userinfo').catch(error =>
        console.log('Could not delete user info', error),
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Username"
          leftIcon={{type: 'font-awesome', name: 'user-o'}}
          onChangeText={username => this.setState({username})}
          value={this.state.username}
          containerStyle={styles.formInput}
        />
        <Input
          placeholder="Password"
          leftIcon={{type: 'font-awesome', name: 'key'}}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          containerStyle={styles.formInput}
        />
        <CheckBox
          title="Remember Me"
          center
          checked={this.state.remember}
          onPress={() => this.setState({remember: !this.state.remember})}
          containerStyle={styles.formCheckbox}
        />
        <View style={styles.formButton}>
          <Button
            onPress={() => this.handleLogin()}
            title="Login"
            color="#512DA8"
          />
        </View>
        <View style={styles.formButton}>
          <Button
            onPress={() => this.props.navigation.navigate('Register')}
            title="Register"
            clear
            icon={
              <Icon
                name="user-plus"
                type="font-awesome"
                size={24}
                color="blue"
              />
            }
            titleStyle={{
              color: 'blue',
            }}
          />
        </View>
      </View>
    );
  }
}
class RegisterTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      remember: false,
      imageUrl: baseUrl + 'images/logo.png',
    };
  }

  //for library
  // handleChoosePhoto = () => {
  //   const options = {
  //     noData: true,
  //   };
  //   ImagePicker.launchImageLibrary(options, response => {
  //     if (response.uri) {
  //       this.setState({imageUrl: response});
  //     }
  //   });
  // };
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {uri: 'data:image/jpeg;base64,' + response.data};
        this.processImage(source);
        this.setState({
          imageUrl: source,
        });
      }
    });
  };
  processImage = async imageUri => {
    let processedImage = await ImageEditor.cropImage(
      imageUri,
      cropData = {
        // offset: {x: , y: number},
        size: {width: 300, height: 300},
        displaySize: {width: 200, height: 200},
        resizeMode: 'contain',
      },
    );
    console.log(processedImage);
    this.setState({imageUrl: processedImage.uri});
  };

  static navigationOptions = {
    title: 'Register',
    tabBarIcon: ({tintColor, focused}) => (
      <Icon
        name="user-plus"
        type="font-awesome"
        size={24}
        iconStyle={{color: tintColor}}
      />
    ),
  };

  handleRegister() {
    console.log(JSON.stringify(this.state));
    if (this.state.remember)
      AsyncStorage.setItem(
        'userinfo',
        JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      ).catch(error => console.log('Could not save user info', error));
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,' + this.state.imageUrl.data,
              }}
              loadingIndicatorSource={require('./images/logo.png')}
              style={styles.image}
            />
            <Button title="Camera" onPress={this.chooseFile} />
          </View>
          {/* <Input
            placeholder="Username"
            leftIcon={{type: 'font-awesome', name: 'user-o'}}
            onChangeText={username => this.setState({username})}
            value={this.state.username}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="Password"
            leftIcon={{type: 'font-awesome', name: 'key'}}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="First Name"
            leftIcon={{type: 'font-awesome', name: 'user-o'}}
            onChangeText={firstname => this.setState({firstname})}
            value={this.state.firstname}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="Last Name"
            leftIcon={{type: 'font-awesome', name: 'user-o'}}
            onChangeText={lastname => this.setState({lastname})}
            value={this.state.lastname}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="Email"
            leftIcon={{type: 'font-awesome', name: 'envelope-o'}}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            containerStyle={styles.formInput}
          />{' '}
          <CheckBox
            title="Remember Me"
            center
            checked={this.state.remember}
            onPress={() => this.setState({remember: !this.state.remember})}
            containerStyle={styles.formCheckbox}
          /> */}
          <View style={styles.formButton}>
            <Button
              onPress={() => this.handleRegister()}
              title="Register"
              icon={
                <Icon
                  name="user-plus"
                  type="font-awesome"
                  size={24}
                  color="white"
                />
              }
              buttonStyle={{
                backgroundColor: '#512DA8',
              }}
            />
          </View>
          <View style={styles.formButton}>
            <Button
              onPress={() => this.handleLogin()}
              title="Login"
              icon={
                <Icon
                  name="sign-in"
                  type="font-awesome"
                  size={24}
                  color="white"
                />
              }
              buttonStyle={{
                backgroundColor: '#512DA8',
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20,
  },
  formInput: {
    margin: 10,
  },
  formCheckbox: {
    margin: 40,
    backgroundColor: null,
  },
  formButton: {
    margin: 60,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },
  image: {
    margin: 10,
    width: 80,
    height: 60,
  },
});
const Login = createBottomTabNavigator(
  {
    Login: LoginTab,
    Register: RegisterTab,
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#9575CD',
      inactiveBackgroundColor: '#D1C4E9',
      activeTintColor: '#ffffff',
      inactiveTintColor: 'gray',
    },
  },
);

export default Login;
