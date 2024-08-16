import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from '../../styles';
import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';

export default function Card(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const {dispatch} = useGlobalProps() as T_GlobalContextCTX;

  return (
    <View style={styles.wrapCard}>
      <TouchableOpacity
        style={styles.btnCard}
        onPress={() => navigation.navigate('ProductList')}>
        <View style={styles.wrapBtnCard}>
          <Image
            style={styles.imgCard}
            source={require('@assets/icons/product.png')}
          />
        </View>
        <Text style={styles.textCard}>Produk</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnCard}
        onPress={() => navigation.navigate('Casier')}>
        <View style={styles.wrapBtnCard}>
          <Image
            style={styles.imgCard}
            source={require('@assets/icons/casier.png')}
          />
        </View>
        <Text style={styles.textCard}>Kasir</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnCard}
        onPress={() => dispatch({Home: {showModalReport: true}})}>
        <View style={styles.wrapBtnCard}>
          <Image
            style={styles.imgCard}
            source={require('@assets/icons/report.png')}
          />
        </View>
        <Text style={styles.textCard}>Report</Text>
      </TouchableOpacity>
    </View>
  );
}
