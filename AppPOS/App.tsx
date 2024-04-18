import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Router from './Router';

import {GlobalContextProvider} from '@context/context';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <GlobalContextProvider>
          <Router />
        </GlobalContextProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
