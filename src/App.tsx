import React from 'react';
import {Platform, StatusBar, UIManager} from 'react-native';

import Main from './screens/Main';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Main />
    </>
  );
};

export default App;
