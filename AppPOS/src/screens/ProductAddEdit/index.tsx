import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Header from '@components/Header';

import Navbar from './components/navbar';

import styles from './styles';
import {ProductAddEditProvider} from './context';

export default function ProductAddEdit(): React.JSX.Element {
  const route = useRoute<any>();
  return (
    <ProductAddEditProvider>
      <SafeAreaView style={styles.body}>
        <StatusBar animated={true} translucent backgroundColor="transparent" />
        <Header title={route?.params?.id ? 'Edit produk' : 'Tambah produk'} />
        <Navbar />
      </SafeAreaView>
    </ProductAddEditProvider>
  );
}
