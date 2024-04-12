import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Header from '@components/Header';

import List from './components/list';
import Navbar from './components/navbar';

import styles from './styles';
import {ProductListProvider} from './context';

export default function ProductList(): React.JSX.Element {
  return (
    <ProductListProvider>
      <SafeAreaView style={styles.body}>
        <StatusBar animated={true} translucent backgroundColor="transparent" />
        <Header title="List produk" />
        <Navbar />
        <List />
      </SafeAreaView>
    </ProductListProvider>
  );
}