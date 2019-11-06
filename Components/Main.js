import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DISHES} from '../shared/Dishes';
import Menu from '../Components/Menu';
import Dishdetail from './Dishdetail';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  onDishSelect = dishID => {
    this.setState({
      selectedDish: dishID,
    });
  };

  render() {
    return (
      <ScrollView style={styles.container} horizontal={false}>
        <Menu
          dishes={this.state.dishes}
          onPress={dishId => this.onDishSelect(dishId)}
        />
        <Dishdetail
          dish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish,
            )[0]
          }
        />
      </ScrollView>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
