/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
console.disableYellowBox = true;
import React from 'react';
import Main from './Components/Main';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import {PersistGate} from 'redux-persist/es/integration/react';
import Loading from './Components/LoadingComponents';
const {persistor, store} = ConfigureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
