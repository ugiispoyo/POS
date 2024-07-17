import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import ScanBluetooth from './components/scan-bluetooth';

import {ConnectToPrintProvider} from './context';
import styles from './styles';

export default function ConnectToPrint(): React.JSX.Element {
  return (
    <ConnectToPrintProvider>
      <SafeAreaView style={styles.body}>
        <ScanBluetooth />
      </SafeAreaView>
    </ConnectToPrintProvider>
  );
}
