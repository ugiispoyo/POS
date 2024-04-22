import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Header from '@components/Header';

import styles from './styles';
import {CheckoutProvider} from './context';

export default function Checkout(): React.JSX.Element {
  return (
    <CheckoutProvider>
      <SafeAreaView style={styles.body}>
        <StatusBar animated={true} translucent backgroundColor="transparent" />
        <Header title="Pembayaran" />
      </SafeAreaView>
    </CheckoutProvider>
  );
}
