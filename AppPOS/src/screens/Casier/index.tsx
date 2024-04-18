import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Header from '@components/Header';

import List from './components/list';
import Navbar from './components/navbar';
import DetailProduct from './components/detail-product';
import DetailCart from './components/detail-cart';

import styles from './styles';
import {CasierProvider} from './context';

export default function Casier(): React.JSX.Element {
  return (
    <CasierProvider>
      <SafeAreaView style={styles.body}>
        <StatusBar animated={true} translucent backgroundColor="transparent" />
        <Header title="Kasir" style={{position: 'absolute'}} />
        <Navbar />
        <List />
        <DetailProduct />
        <DetailCart />
      </SafeAreaView>
    </CasierProvider>
  );
}
