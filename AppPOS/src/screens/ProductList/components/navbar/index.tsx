import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, Image} from 'react-native';

import styles from '../../styles';

export default function Navbar(): React.JSX.Element {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={{width: 37, height: 37}} onPress={() => navigation.navigate("Home")}>
        <Image
          style={{height: '100%', width: 'auto'}}
          source={require('@assets/icons/back.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{width: 45, height: 45}}>
        <Image
          style={{height: '100%', width: 'auto'}}
          source={require('@assets/icons/add-product.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
