import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {DISHES} from '../shared/Dishes';
import {PROMOTIONS} from '../shared/Promotion';
import {LEADERS} from '../shared/Leader';
import {Card, Button} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';

const RenderItem = props => {
  const item = props.item;
  if (item !== '') {
    return (
      <Card
        featuredTitle={item.name}
        featuredSubtitle={item.designation}
        image={require('./images/uthappizza.png')}>
        <Text style={{margin: 10}}>{item.description}</Text>
      </Card>
    );
  } else {
    return <View />;
  }
};
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }
  static navigationOptions = {
    title: 'Homey',
  };
 
  render() {
    return (
      <ScrollView>
        {/* <Button title="press" onPress={this.toggleDrawer} /> */}
        <RenderItem item={this.state.dishes.filter(dish => dish.featured)[0]} />
        <RenderItem
          item={this.state.promotions.filter(promo => promo.featured)[0]}
        />
        <RenderItem
          item={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      </ScrollView>
    );
  }
}
