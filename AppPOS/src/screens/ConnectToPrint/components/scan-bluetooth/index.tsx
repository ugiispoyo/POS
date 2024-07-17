import {ActivityIndicator, Button, ScrollView, Text, View} from 'react-native';

import {useProps} from '@screens/ConnectToPrint/context';
import {T_ConnectToPrintCTX} from '@screens/ConnectToPrint/types';

import ItemList from '../item-devices';

import styles from '../../styles';
import SamplePrint from '../sample-printer/index.';

export default function ScanBluetooth(): React.JSX.Element {
  const {scanBluetoothDevice, unPair, connect, bluetoothConfig} =
    useProps() as T_ConnectToPrintCTX;
  const {bleOpend, boundAddress, name, loading, pairedDevices} =
    bluetoothConfig;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bluetoothStatusContainer}>
        <Text
          style={{
            ...styles.bluetoothStatus,
            ...{backgroundColor: bleOpend ? 'green' : 'red'},
          }}>
          Bluetooth {bleOpend ? 'Aktif' : 'Non Aktif'}
        </Text>
      </View>
      {!bleOpend && (
        <Text style={styles.bluetoothInfo}>Mohon aktifkan bluetooth anda</Text>
      )}
      <Text style={styles.sectionTitle}>
        Printer yang terhubung ke aplikasi:
      </Text>
      {boundAddress.length > 0 && (
        <ItemList
          label={name}
          value={boundAddress}
          onPress={() => unPair(boundAddress)}
          actionText="Putus"
          color="#E9493F"
          connected={undefined}
        />
      )}
      {boundAddress.length < 1 && (
        <Text style={styles.printerInfo}>Belum ada printer yang terhubung</Text>
      )}
      <Text style={styles.sectionTitle}>
        Bluetooth yang terhubung ke HP ini:
      </Text>
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
      <Button onPress={() => scanBluetoothDevice()} title="Scan Bluetooth" />
      <SamplePrint />
      <View style={{height: 170}} />
    </ScrollView>
  );
}
