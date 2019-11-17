import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import Loading from './LoadingComponents';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {Tile} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Menu extends Component {
  static navigationOptions = {
    title: 'Menu',
  };
  renderMenuItem = ({item, index}) => {
    return (
      <Animatable.View animation="fadeInRightBig" duration={2000}>
        <Tile
          key={index}
          title={item.name}
          caption={item.description}
          featured
          onPress={() =>
            this.props.navigation.navigate('Dishdetail', {dishId: item.id})
          }
          imageSrc={{uri: baseUrl + item.image}}
        />
      </Animatable.View>
    );
  };

  render() {
    const {navigate} = this.props.navigation;

    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMess) {
      return (
        <View>
          <Text>{this.props.dishes.errMess}</Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.props.dishes.dishes}
          renderItem={this.renderMenuItem}
          keyExtractor={item => item.id.toString()}
        />
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
  };
};
export default connect(mapStateToProps)(Menu);
