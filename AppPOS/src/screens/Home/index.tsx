import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Header from './components/header';
import Card from './components/card';

import styles from './styles';

export default function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <Header />
      <Card />
    </SafeAreaView>
  );
}
