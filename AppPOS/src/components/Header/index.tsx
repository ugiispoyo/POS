import React from 'react';
import {Image, View, Text} from 'react-native';

import styles from './styles';
import {T_Header} from './type';

export default function Header({title}: T_Header): React.JSX.Element {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerImg}
        source={require('@assets/images/bg-header.jpeg')}
      />
      <View style={styles.headerWrapText}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.headerRoundedBottom}></View>
    </View>
  );
}
