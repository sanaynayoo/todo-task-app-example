import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';

// redux stores
import {store} from './src/store';

// App Navigator
import AppNavigator from './src/navigations/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
