import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { Navigator } from './Navigator/';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Navigator />
      </Provider>
    );
  }
}
