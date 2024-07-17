import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Header from '@components/Header';
import ScanBluetooth from './components/scan-bluetooth';

import {ConnectToPrintProvider} from './context';
import styles from './styles';

export default function ConnectToPrint(): React.JSX.Element {
  return (
    <ConnectToPrintProvider>
      <SafeAreaView style={styles.body}>
        <StatusBar animated={true} translucent backgroundColor="transparent" />
        <Header title="Koneksi Printer" style={{position: 'absolute', top: 0}} />
        <ScanBluetooth />
      </SafeAreaView>
    </ConnectToPrintProvider>
  );
}
