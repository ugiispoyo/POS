import React from 'react';
import {Image, View, Text} from 'react-native';

import styles from '../../styles';

export default function Header(): React.JSX.Element {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerImg}
        source={require('@assets/images/bg-header.jpeg')}
      />
      <View style={styles.headerWrapText}>
        <Text
          style={styles.headerText}>
          List Produk
        </Text>
      </View>
      <View style={styles.headerRoundedBottom}></View>
    </View>
  );
}
