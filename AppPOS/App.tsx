import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Router from './Router';

import {GlobalContextProvider} from '@context/context';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <GlobalContextProvider>
        <Router />
      </GlobalContextProvider>
    </NavigationContainer>
  );
}

export default App;
