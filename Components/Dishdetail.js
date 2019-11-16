import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  Modal,
  StyleSheet,
} from 'react-native';
import {Card, Icon, Rating, Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {postFavorite, addComments, postComment} from '../redux/ActionCreators';

const RenderDish = props => {
  const dish = props.dish;
  if (dish != null) {
    return (
      <Card
        featuredTitle={dish.name}
        // image={require('./images/uthappizza.png')}>
        image={{uri: baseUrl + dish.image}}>
        <Text style={{margin: 10}}>{dish.description}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
            flex: 1,
          }}>
          <Icon
            raised
            reverse
            name={props.favorite ? 'heart' : 'heart-o'}
            type="font-awesome"
            color="#f50"
            onPress={() =>
              props.favorite ? console.log('Already favorite') : props.onPress()
            }
          />
          <Icon
            raised
            reverse
            name={'pencil'}
            type="font-awesome"
            color="#512DA8"
            onPress={() => props.onSelect()}
          />
        </View>
      </Card>
    );
  } else {
    return <View />;
  }
};
function RenderComments(props) {
  const comments = props.comments;

  const renderCommentItem = ({item, index}) => {
    return (
      <View key={index} style={{margin: 10}}>
        <Text style={{fontSize: 14}}>{item.comment}</Text>
        <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
        <Text style={{fontSize: 12}}>
          {'-- ' + item.author + ', ' + item.date}{' '}
        </Text>
      </View>
    );
  };

  return (
    <Card title="Comments">
      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={item => item.id.toString()}
      />
    </Card>
  );
}

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      author: '',
      comment: '',
      showModal: false,
    };
  }
  static navigationOptions = {
    title: 'Dish Detail',
  };

  markFavorite(dishId) {
    this.props.postFavorite(dishId);
  }
  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  }

  handleComments(dishID) {
    console.log(JSON.stringify(this.state));
    this.toggleModal();
    this.props.postComment(
      dishID,
      this.state.rating,
      this.state.comment,
      this.state.author,
    );
  }

  render() {
    const dishID = this.props.navigation.getParam('dishId');
    // const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <RenderDish
          dish={this.props.dishes.dishes[+dishID]}
          favorite={this.props.favourites.some(el => el === dishID)}
          onPress={() => this.markFavorite(dishID)}
          onSelect={() => this.toggleModal()}
        />

        <RenderComments
          comments={this.props.comments.comments.filter(
            comment => comment.dishId === dishID,
          )}
        />
        <Modal
          animation={'slide'}
          transparent={false}
          visible={this.state.showModal}
          onDismiss={() => this.toggleModal()}
          onRequestClose={() => this.toggleModal}>
          <View style={styles.modal}>
            <View>
              <Rating
                showRating
                type="star"
                fractions
                startingValue={0}
                imageSize={40}
                onFinishRating={rating => this.setState({rating: rating})}
              />
            </View>
            <View>
              <Input
                placeholder="Author"
                leftIcon={<Icon name="user-o" type="font-awesome" size={24} />}
                onChangeText={value => this.setState({author: value})}
              />
            </View>
            <View>
              <Input
                placeholder="Comment"
                leftIcon={
                  <Icon name="comment-o" type="font-awesome" size={24} />
                }
                onChangeText={value => this.setState({comment: value})}
                inputContainerStyle={{
                  marginBottom: 30,
                }}
              />
            </View>
            <View>
              <Button
                color="#512DA8"
                title="SUBMIT"
                onPress={() => this.handleComments(dishID)}
                containerStyle={{marginBottom: 30}}
              />
            </View>
            <View>
              <Button
                onPress={() => this.toggleModal()}
                color="#989898"
                title="CLOSE"
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    favourites: state.favourites,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postFavorite: dishId => dispatch(postFavorite(dishId)),
    addComments: (dishId, rating, comment, author) =>
      dispatch(addComments(dishId, rating, comment, author)),
    postComment: (dishId, rating, comment, author) =>
      dispatch(postComment(dishId, rating, comment, author)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);
const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 28,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
  modal: {
    justifyContent: 'center',
    margin: 20,
    marginBottom: 50,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#512DA8',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});
