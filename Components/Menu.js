import React from 'react';
import {FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

function Menu(props) {
  const renderMenuItem = ({item, index}) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        leftAvatar={{source: require('./images/uthappizza.png')}}
        onPress={() => props.onPress(item.id)}
        bottomDivider
        chevron
      />
    );
  };

  return (
    <FlatList
      data={props.dishes}
      renderItem={renderMenuItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}

export default Menu;
