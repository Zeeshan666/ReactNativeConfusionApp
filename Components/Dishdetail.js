import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {DISHES} from '../shared/Dishes';
const RenderDish = props => {
  const dish = props.dish;

  if (dish != null) {
    return (
      <Card
        featuredTitle={dish.name}
        image={require('./images/uthappizza.png')}>
        <Text style={{margin: 10}}>{dish.description}</Text>
      </Card>
    );
  } else {
    return <View />;
  }
};

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  static navigationOptions = {
    title: 'Dish Detail',
  };
  render() {
    const dishID = this.props.navigation.getParam('dishId');
    return <RenderDish dish={this.state.dishes[+dishID]} />;
  }
}

export default Dishdetail;
