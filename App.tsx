import 'react-native-gesture-handler';
import React from 'react';
import { AppNavigation } from './src/routers';
import { Provider } from 'react-redux';
import store from 'store/store';
import { enableLatestRenderer } from 'react-native-maps';
import { ThemeProvider } from '@rneui/themed';
import { theme } from 'styles/theme';

enableLatestRenderer();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppNavigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
