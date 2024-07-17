import {useEffect} from 'react';
import {
  DeviceEventEmitter,
  NativeEventEmitter,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';

import {BluetoothManager} from 'react-native-bluetooth-escpos-printer';
import {PERMISSIONS, requestMultiple, RESULTS} from 'react-native-permissions';

import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';

export const useLogic = () => {
  const {dispatch, state} = useGlobalProps() as T_GlobalContextCTX;
  const {boundAddress, pairedDevices, foundDs} = state.bluetoothConfig;

  /* === For connect bluetooth to print === */
  const deviceAlreadPaired = (rsp: any) => {
    var ds = null;
    if (typeof rsp.devices === 'object') {
      ds = rsp.devices;
    } else {
      try {
        ds = JSON.parse(rsp.devices);
      } catch (e) {}
    }
    if (ds && ds.length) {
      // setPairedDevices(pared);
      dispatch({
        type: 'UPDATE_CONFIG_BLUETOOTH',
        value: {
          pairedDevices: [...state.bluetoothConfig.pairedDevices, ...ds],
        },
      });
      // dispatch({
      //   bluetoothConfig: {
      //     ...state.bluetoothConfig,
      //     pairedDevices: [...state.bluetoothConfig.pairedDevices, ...ds]
      //   },
      // });
    }
  };

  const deviceFoundEvent = (rsp: any) => {
    var r: any = null;
    try {
      if (typeof rsp.device === 'object') {
        r = rsp.device;
      } else {
        r = JSON.parse(rsp.device);
      }
    } catch (e) {
      // ignore error
    }

    if (r) {
      let found = foundDs || [];
      if (found.findIndex) {
        let duplicated = found.findIndex(function (x) {
          return x.address == r.address;
        });
        if (duplicated == -1) {
          found.push(r);
          dispatch({
            type: 'UPDATE_CONFIG_BLUETOOTH',
            value: {
              foundDs: found,
            },
          });
        }
      }
    }
  };

  const connect = (row: any) => {
    dispatch({
      type: 'UPDATE_CONFIG_BLUETOOTH',
      value: {
        loading: true,
      },
    });
    BluetoothManager.connect(row.address).then(
      (s: any) => {
        dispatch({
          type: 'UPDATE_CONFIG_BLUETOOTH',
          value: {
            loading: false,
            boundAddress: row.address,
            name: row.name || 'UNKNOWN',
          },
        });
      },
      (e: any) => {
        dispatch({
          type: 'UPDATE_CONFIG_BLUETOOTH',
          value: {
            loading: false,
          },
        });
        // setLoading(false);
        // alert(e);
      },
    );
  };

  const unPair = (address: any) => {
    dispatch({
      type: 'UPDATE_CONFIG_BLUETOOTH',
      value: {
        loading: true,
      },
    });
    BluetoothManager.unpaire(address).then(
      (s: any) => {
        dispatch({
          type: 'UPDATE_CONFIG_BLUETOOTH',
          value: {
            loading: false,
            boundAddress: '',
            name: '',
          },
        });
      },
      (e: any) => {
        dispatch({
          type: 'UPDATE_CONFIG_BLUETOOTH',
          value: {
            loading: false,
          },
        });
        // setLoading(false);
        // alert(e);
      },
    );
  };

  const scanDevices = () => {
    dispatch({
      type: 'UPDATE_CONFIG_BLUETOOTH',
      value: {
        loading: true,
      },
    });
    BluetoothManager.scanDevices().then(
      (s: any) => {
        // const pairedDevices = s.paired;
        var found = s.found;
        try {
          found = JSON.parse(found); //@FIX_it: the parse action too weired..
        } catch (e) {
          //ignore
        }
        var fds = foundDs;
        if (found && found.length) {
          fds = found;
        }
        dispatch({
          type: 'UPDATE_CONFIG_BLUETOOTH',
          value: {
            loading: false,
            foundDs: fds,
          },
        });
      },
      (er: any) => {
        dispatch({
          type: 'UPDATE_CONFIG_BLUETOOTH',
          value: {
            loading: false,
          },
        });
        // setLoading(false);
        // ignore
      },
    );
  };

  const scan = () => {
    try {
      async function blueTooth() {
        const permissions = {
          title: 'HSD bluetooth meminta izin untuk mengakses bluetooth',
          message:
            'HSD bluetooth memerlukan akses ke bluetooth untuk proses koneksi ke bluetooth printer',
          buttonNeutral: 'Lain Waktu',
          buttonNegative: 'Tidak',
          buttonPositive: 'Boleh',
        };

        const bluetoothConnectGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          permissions,
        );
        if (bluetoothConnectGranted === PermissionsAndroid.RESULTS.GRANTED) {
          const bluetoothScanGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
            permissions,
          );
          if (bluetoothScanGranted === PermissionsAndroid.RESULTS.GRANTED) {
            scanDevices();
          }
        } else {
          // ignore akses ditolak
        }
      }
      blueTooth();
    } catch (err) {
      console.warn(err);
    }
  };

  const scanBluetoothDevice = async () => {
    dispatch({
      type: 'UPDATE_CONFIG_BLUETOOTH',
      value: {
        loading: true,
      },
    });
    try {
      const request = await requestMultiple([
        PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
        PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ]);

      if (
        request['android.permission.ACCESS_FINE_LOCATION'] === RESULTS.GRANTED
      ) {
        scanDevices();
        dispatch({
          type: 'UPDATE_CONFIG_BLUETOOTH',
          value: {
            loading: false,
          },
        });
      } else {
        dispatch({
          type: 'UPDATE_CONFIG_BLUETOOTH',
          value: {
            loading: false,
          },
        });
      }
    } catch (err) {
      dispatch({
        type: 'UPDATE_CONFIG_BLUETOOTH',
        value: {
          loading: false,
        },
      });
    }
  };

  useEffect(() => {
    if (Platform.OS === 'ios') {
      let bluetoothManagerEmitter = new NativeEventEmitter(BluetoothManager);
      bluetoothManagerEmitter.addListener(
        BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
        rsp => {
          deviceAlreadPaired(rsp);
        },
      );
      bluetoothManagerEmitter.addListener(
        BluetoothManager.EVENT_DEVICE_FOUND,
        rsp => {
          deviceFoundEvent(rsp);
        },
      );
      bluetoothManagerEmitter.addListener(
        BluetoothManager.EVENT_CONNECTION_LOST,
        () => {
          dispatch({
            type: 'UPDATE_CONFIG_BLUETOOTH',
            value: {
              name: '',
              boundAddress: '',
            },
          });
          // setName('');
          // setBoundAddress('');
        },
      );
    } else if (Platform.OS === 'android') {
      DeviceEventEmitter.addListener(
        BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
        rsp => {
          deviceAlreadPaired(rsp);
        },
      );
      DeviceEventEmitter.addListener(
        BluetoothManager.EVENT_DEVICE_FOUND,
        rsp => {
          deviceFoundEvent(rsp);
        },
      );
      DeviceEventEmitter.addListener(
        BluetoothManager.EVENT_CONNECTION_LOST,
        () => {
          dispatch({
            type: 'UPDATE_CONFIG_BLUETOOTH',
            value: {
              name: '',
              boundAddress: '',
            },
          });
          // setName('');
          // setBoundAddress('');
        },
      );
      DeviceEventEmitter.addListener(
        BluetoothManager.EVENT_BLUETOOTH_NOT_SUPPORT,
        () => {
          ToastAndroid.show(
            'Device Not Support Bluetooth !',
            ToastAndroid.LONG,
          );
        },
      );
    }
    if (pairedDevices.length < 1) {
      scan();
    }
  }, []);

  useEffect(() => {
    BluetoothManager.isBluetoothEnabled().then(
      (enabled: any) => {
        dispatch({
          type: 'UPDATE_CONFIG_BLUETOOTH',
          value: {
            loading: false,
            bleOpend: Boolean(enabled),
          },
        });
        // setBleOpend(Boolean(enabled));
        // setLoading(false);
      },
      (err: any) => {
        err;
      },
    );
  }, [boundAddress, pairedDevices, foundDs]);

  return {
    connect,
    unPair,
    scanBluetoothDevice,

    ...state,
  };
};
