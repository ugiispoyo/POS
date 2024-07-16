import React from 'react';
import { ActivityIndicator, Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

import { ConnectToPrintProvider } from './context';

import styles from './styles';
import { useGlobalProps } from '@context/context';
import { T_GlobalContextCTX } from '@context/types';
import ItemList from './ItemList';

export default function ConnectToPrint(): React.JSX.Element {
  const { scanBluetoothDevice, unPair, connect, state } = useGlobalProps() as T_GlobalContextCTX;
  const { bleOpend, boundAddress, name, loading, pairedDevices } = state.bluetoothConfig

  return (
    <ConnectToPrintProvider>
      <SafeAreaView style={styles.body}>
        <ScrollView style={styles.container}>
          <View style={styles.bluetoothStatusContainer}>
            <Text style={styles.bluetoothStatus}>
              Bluetooth {bleOpend ? 'Aktif' : 'Non Aktif'}
            </Text>
          </View>
          {!bleOpend && <Text style={styles.bluetoothInfo}>Mohon aktifkan bluetooth anda</Text>}
          <Text style={styles.sectionTitle}>Printer yang terhubung ke aplikasi:</Text>
          {boundAddress.length > 0 && (
            <ItemList
              label={name}
              value={boundAddress}
              onPress={() => unPair(boundAddress)}
              actionText="Putus"
              color="#E9493F" connected={undefined}            />
          )}
          {boundAddress.length < 1 && (
            <Text style={styles.printerInfo}>Belum ada printer yang terhubung</Text>
          )}
          <Text style={styles.sectionTitle}>Bluetooth yang terhubung ke HP ini:</Text>
          {loading ? <ActivityIndicator animating={true} /> : null}
          <View style={styles.containerList}>
            {pairedDevices.map((item, index) => {
              return (
                <ItemList
                  key={index}
                  onPress={() => connect(item)}
                  label={item.name}
                  value={item.address}
                  connected={item.address === boundAddress}
                  actionText="Hubungkan"
                  color="#00BCD4"
                />
              );
            })}
          </View>
          {/* <SamplePrint /> */}
          <Button
            onPress={() => scanBluetoothDevice()}
            title="Scan Bluetooth"
          />
          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>
    </ConnectToPrintProvider>
  );
}
