import React, { Component } from 'react';
import { View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './header';
import TodoItem from './todoItem';
import AddTodo from './addTodo';
import * as actionCreators from '../actions/index'
import DisplayCount from './display_count';
import styles from '../styles/main_styles'


class Main extends Component {
  constructor(props) {
    super(props)
    this.props.init()
  }

  pressHandler = (key) => {
    this.props.deleteItem(key)
  };

  submitHandler = (text) => {
    if(text.length > 3){
      this.props.addItem({text, key: Math.random().toString()})
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  render() {
    return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed');
    }}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
              {this.props.getTodos.length > 0 ? <DisplayCount/> : null}

              <AddTodo submitHandler={this.submitHandler} />

              <View style={styles.list}>
                  <FlatList
                      data={this.props.getTodos}
                      renderItem={({ item }) => (
                      <TodoItem item={item} pressHandler={this.pressHandler} />
                      )}
                  />
              </View>

          </View>
        </View>
    </TouchableWithoutFeedback>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        init: bindActionCreators(actionCreators.initialize_store, dispatch),
        addItem: bindActionCreators(actionCreators.add_item, dispatch),
        deleteItem: bindActionCreators(actionCreators.delete_item, dispatch),
    }
}

function mapStateToProps(state) {
    console.log('state: ', state)
    return {
        getTodos: state ? state.todos ? state.todos : [] : []
        // getTodos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)