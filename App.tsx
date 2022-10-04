import 'react-native-gesture-handler';
import React from 'react';
import { AppNavigation } from './src/routers';
import { Provider } from 'react-redux';
import store from 'store/store';
import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
