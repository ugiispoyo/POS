import React from 'react';
import {Image, View} from 'react-native';

import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

import styles from '../../styles';

export default function Header(): React.JSX.Element {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerImg}
        source={require('@assets/images/bg-header.jpeg')}
      />
      <View style={styles.headerWrapText}>
        <Animated.Text
          entering={FadeInUp.delay(200).duration(1000)}
          style={styles.headerText}>
          Ayam Geprek
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(1000).springify().damping(3)}
          style={styles.headerTextMak}>
          Mak Cleguk
        </Animated.Text>
      </View>
      <View style={styles.headerRoundedBottom}></View>
    </View>
  );
}
