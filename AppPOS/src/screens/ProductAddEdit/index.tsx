import React from 'react';
import {Platform, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Header from '@components/Header';
import Form from './components/form';

import styles from './styles';
import {ProductAddEditProvider} from './context';

export default function ProductAddEdit(): React.JSX.Element {
  const route = useRoute<any>();
  return (
    <ProductAddEditProvider>
      <SafeAreaView style={styles.body}>
        <StatusBar animated={true} translucent backgroundColor="transparent" />
        <Header
          title={route?.params?.id ? 'Edit produk' : 'Tambah produk'}
          style={{position: Platform.OS === 'ios' ? 'absolute' : 'relative'}}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: Platform.OS === 'ios' ? 60 : 0}}>
          <Form />
        </ScrollView>
      </SafeAreaView>
    </ProductAddEditProvider>
  );
}
