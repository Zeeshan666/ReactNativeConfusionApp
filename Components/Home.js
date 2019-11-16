import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {DISHES} from '../shared/Dishes';
import {PROMOTIONS} from '../shared/Promotion';
import {LEADERS} from '../shared/Leader';
import {Card} from 'react-native-elements';
import Loading from './LoadingComponents';
import {baseUrl} from '../shared/baseUrl';
import {connect} from 'react-redux';
function RenderItem(props) {
  const item = props.item;
  if (props.isLoading) {
    return <Loading />;
  } else if (props.errMess) {
    return (
      <View>
        <Text>{props.erreMess}not working</Text>
      </View>
    );
  } else {
    if (item != null) {
      return (
        <Card
          featuredTitle={item.name}
          featuredSubtitle={item.designation}
          image={{uri: baseUrl + item.image}}>
          <Text style={{margin: 10}}>{item.description}</Text>
        </Card>
      );
    } else {
      return <View />;
    }
  }
}

class Home extends Component {
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
        <RenderItem
          item={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          isLoading={this.props.dishes.isLoading}
          erreMess={this.props.dishes.erreMess}
        />
        <RenderItem
          item={
            this.props.promotions.promotions.filter(promo => promo.featured)[0]
          }
          isLoading={this.props.promotions.isLoading}
          erreMess={this.props.promotions.erreMess}
        />
        <RenderItem
          item={this.props.leaders.leaders.filter(leader => leader.featured)[0]}
          isLoading={this.props.leaders.isLoading}
          erreMess={this.props.leaders.erreMess}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
export default connect(mapStateToProps)(Home);
