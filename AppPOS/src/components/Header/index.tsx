import React from 'react';
import {Image, View, Text} from 'react-native';

import styles from './styles';
import {T_Header} from './type';

export default function Header({title, style}: T_Header): React.JSX.Element {
  const styleCTM = style ? style : ({} as any);

  return (
    <View style={{...styles.header, ...styleCTM}}>
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
