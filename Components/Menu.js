import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import {DISHES} from '../shared/Dishes';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerActions} from 'react-navigation-drawer';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    const {navigate} = this.props.navigation;
    const renderMenuItem = ({item, index}) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          leftAvatar={{source: require('./images/uthappizza.png')}}
          onPress={() => navigate('Dishdetail', {dishId: item.id})}
          bottomDivider
          chevron
        />
      );
    };
    return (
      <View>
        <FlatList
          data={this.state.dishes}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id.toString()}
        />
        {/* <View style={{marginHorizontal: 50, marginTop: 10}}>
          <Button
            title="About"
            buttonStyle={{backgroundColor: 'red'}}
            onPress={() => navigate('About')}
          />
        </View>
        <View style={{marginHorizontal: 50, marginTop: 10}}>
          <Button
            type="outline"
            icon={<Icon name="arrow-right" size={15} color="white" />}
            title="contact"
            buttonStyle={{borderColor: 'green'}}
            onPress={() => navigate('About')}
          />
        </View> */}
      </View>
    );
  }
}

export default Menu;
