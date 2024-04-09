import React, {useState} from 'react';
import {Image, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

import Header from './components/header';
import Card from './components/card';

import styles from './styles';

export default function Home(): React.JSX.Element {
  return (
    <View style={styles.body}>
      <Header />
      <Card />
    </View>
  );
}
