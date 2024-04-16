import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, StatusBar, Text, View} from 'react-native';

import Host from '@screens/Host';
// import Login from '@screens/Login';
import Home from '@screens/Home';
import ProductList from '@screens/ProductList';
import ProductAddEdit from '@screens/ProductAddEdit';
import Casier from '@screens/Casier';

import {T_GlobalContextCTX} from '@context/types';
import {useGlobalProps} from '@context/context';

const Stack = createNativeStackNavigator();

export default () => {
  const {state} = useGlobalProps() as T_GlobalContextCTX;
  const {hasHostname, isLoading, hostname} = state;

  if (isLoading) {
    return (
      <>
        <StatusBar animated={true} translucent backgroundColor="transparent" />
        <View
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            position: 'relative',
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              minHeight: 550,
              position: 'absolute',
              backgroundColor: '#000000f2',
              top: 0,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                minHeight: 700,
                position: 'absolute',
              }}
              source={require('@assets/images/bg-header.jpeg')}
            />
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 30,
              backgroundColor: '#000000bb',
              paddingHorizontal: 30,
              paddingVertical: 15,
              borderRadius: 10,
            }}>
            Loading...
          </Text>
        </View>
      </>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={!hasHostname && hostname === '' ? 'Host' : 'Casier'}
      screenOptions={{headerShown: false}}>
      {!hasHostname && hostname === '' ? (
        <>
          <Stack.Screen name="Host" component={Host} />
        </>
      ) : (
        <>
          {/* <Stack.Screen name="Login" component={Login} /> */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductAddEdit" component={ProductAddEdit} />
          <Stack.Screen name="Casier" component={Casier} />
        </>
      )}
    </Stack.Navigator>
  );
};
