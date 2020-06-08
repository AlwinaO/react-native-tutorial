import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './app/components/main'
import reducer from './app/reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}