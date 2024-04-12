import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from '../../styles';

export default function Card(): React.JSX.Element {
  const navigation = useNavigation<any>();

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
      <TouchableOpacity style={styles.btnCard}>
        <View style={styles.wrapBtnCard}>
          <Image
            style={styles.imgCard}
            source={require('@assets/icons/casier.png')}
          />
        </View>
        <Text style={styles.textCard}>Kasir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnCard}>
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
