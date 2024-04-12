import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Host from '@screens/Host';
import Login from '@screens/Login';
import Home from '@screens/Home';
import ProductList from '@screens/ProductList';

import {GlobalContextProvider} from '@context/context';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Host" component={Host} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductList" component={ProductList} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

export default App;
