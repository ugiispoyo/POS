import { useCallback, useEffect } from 'react';
import {
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { BluetoothManager } from 'react-native-bluetooth-escpos-printer';
import { PERMISSIONS, requestMultiple, RESULTS } from 'react-native-permissions';

import { localKeys } from '@constants/index';
import { getStorage, removeStorage, setStorage } from '@utils/storage';
import getProducts from '@services/getProduct';

import { store } from '@store/index';
import { T_FieldHostname } from './types';
import { DeviceEventEmitter, NativeEventEmitter, PermissionsAndroid, Platform, ToastAndroid } from 'react-native';

/* default field hostname React hook */
const fieldHostnameForm: T_FieldHostname = {
  hostname: '',
};

export const useLogic = () => {
  const navigation = useNavigation<any>();
  const navigationRef =
    createNavigationContainerRef<ReactNavigation.RootParamList>();
  const { dispatch, state } = store();
  const { boundAddress, pairedDevices, foundDs } = state.bluetoothConfig

  const hookHostnameForm = useForm({
    defaultValues: fieldHostnameForm,
  });

  useEffect(() => {
    dispatch({ isLoading: true });
    checkHostName();
    getDataProducts();
  }, []);

  const checkHostName = async () => {
    const host = await getStorage(localKeys.HOSTNAME);
    if (host) {
      dispatch({ type: 'SET_HOSTNAME', value: host.hostname });
    } else {
      dispatch({ isLoading: false });
    }
  };

  const saveHost = async (data: T_FieldHostname) => {
    dispatch({ isLoading: true });
    await setStorage(localKeys.HOSTNAME, { hostname: data.hostname.toLowerCase() });
    setTimeout(async () => {
      const check = await getStorage(localKeys.HOSTNAME);
      if (!check) {
        dispatch({ isLoading: false });
      }
      dispatch({ type: 'SET_HOSTNAME', value: check.hostname });
    }, 500);
  };

  const changeHostname = async () => {
    dispatch({ isLoading: true });
    await removeStorage(localKeys.HOSTNAME);
    setTimeout(async () => {
      dispatch({ type: 'REMOVE_HOSTNAME' });
      if (navigationRef.isReady()) {
        navigation.navigate('Host');
      }
    }, 500);
  };

  const getDataProducts = async () => {
    dispatch({ loading: { isLoading: true, module: "PRODUCT_LIST" } })
    const data = await getProducts({
      url: `${state.hostname}/api/products?limit=200&sort_order=desc`,
      // url: `http://192.168.1.5:8000/api/products?limit=200&sort_order=desc`,
      // init: {params: { limit: 50, sort_order: "desc" }}
    })
    if (typeof data?.data === "undefined") {
      dispatch({ loading: { isLoading: false, module: "" } })
      dispatch({ error: data?.status || data as any })
      return;
    }

    dispatch({ Products: data.data })
    dispatch({ loading: { isLoading: false, module: "" } })
  }

  const deviceAlreadPaired = useCallback(
    (rsp: any) => {
      var ds = null;
      if (typeof rsp.devices === 'object') {
        ds = rsp.devices;
      } else {
        try {
          ds = JSON.parse(rsp.devices);
        } catch (e) { }
      }
      if (ds && ds.length) {
        let pared = pairedDevices;
        if (pared.length < 1) {
          pared = pared.concat(ds || []);
        }
        // setPairedDevices(pared);
        dispatch({
          bluetoothConfig: {
            ...state.bluetoothConfig,
            pairedDevices: pared
          }
        })
      }
    },
    [pairedDevices],
  );

  const deviceFoundEvent = useCallback(
    (rsp: any) => {
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
              bluetoothConfig: {
                ...state.bluetoothConfig,
                foundDs: found
              }
            })
          }
        }
      }
    },
    [foundDs],
  );

  const connect = (row: any) => {
    dispatch({
      bluetoothConfig: {
        ...state.bluetoothConfig,
        loading: true
      }
    })
    BluetoothManager.connect(row.address).then(
      (s: any) => {
        dispatch({
          bluetoothConfig: {
            ...state.bluetoothConfig,
            loading: false,
            boundAddress: row.address,
            name: row.name || 'UNKNOWN'
          }
        })
      },
      (e: any) => {
        dispatch({
          bluetoothConfig: {
            ...state.bluetoothConfig,
            loading: false,
          }
        })
        // setLoading(false);
        // alert(e);
      },
    );
  };

  const unPair = (address: any) => {
    dispatch({
      bluetoothConfig: {
        ...state.bluetoothConfig,
        loading: true,
      }
    })
    BluetoothManager.unpaire(address).then(
      (s: any) => {
        dispatch({
          bluetoothConfig: {
            ...state.bluetoothConfig,
            loading: false,
            boundAddress: '',
            name: ''
          }
        })
      },
      (e: any) => {
        dispatch({
          bluetoothConfig: {
            ...state.bluetoothConfig,
            loading: false,
          }
        })
        // setLoading(false);
        // alert(e);
      },
    );
  };

  const scanDevices = useCallback(() => {
    dispatch({
      bluetoothConfig: {
        ...state.bluetoothConfig,
        loading: true,
      }
    })
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
          bluetoothConfig: {
            ...state.bluetoothConfig,
            loading: false,
            foundDs: fds
          }
        })
      },
      (er: any) => {
        dispatch({
          bluetoothConfig: {
            ...state.bluetoothConfig,
            loading: false,
          }
        })
        // setLoading(false);
        // ignore
      },
    );
  }, [foundDs]);

  const scan = useCallback(() => {
    try {
      async function blueTooth() {
        const permissions = {
          title: 'HSD bluetooth meminta izin untuk mengakses bluetooth',
          message: 'HSD bluetooth memerlukan akses ke bluetooth untuk proses koneksi ke bluetooth printer',
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
  }, [scanDevices]);

  const scanBluetoothDevice = async () => {
    dispatch({
      bluetoothConfig: {
        ...state.bluetoothConfig,
        loading: false,
      }
    })
    try {
      const request = await requestMultiple([
        PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
        PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ]);

      if (request['android.permission.ACCESS_FINE_LOCATION'] === RESULTS.GRANTED) {
        scanDevices();
        dispatch({
          bluetoothConfig: {
            ...state.bluetoothConfig,
            loading: false,
          }
        })
      } else {
        dispatch({
          bluetoothConfig: {
            ...state.bluetoothConfig,
            loading: false,
          }
        })
      }
    } catch (err) {
      dispatch({
        bluetoothConfig: {
          ...state.bluetoothConfig,
          loading: false,
        }
      })
    }
  };


  useEffect(() => {
    BluetoothManager.isBluetoothEnabled().then(
      (enabled: any) => {
        dispatch({
          bluetoothConfig: {
            ...state.bluetoothConfig,
            loading: false,
            bleOpend: Boolean(enabled)
          }
        })
        // setBleOpend(Boolean(enabled));
        // setLoading(false);
      },
      (err: any) => {
        err;
      },
    );

    if (Platform.OS === 'ios') {
      let bluetoothManagerEmitter = new NativeEventEmitter(BluetoothManager);
      bluetoothManagerEmitter.addListener(BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED, rsp => {
        deviceAlreadPaired(rsp);
      });
      bluetoothManagerEmitter.addListener(BluetoothManager.EVENT_DEVICE_FOUND, rsp => {
        deviceFoundEvent(rsp);
      });
      bluetoothManagerEmitter.addListener(BluetoothManager.EVENT_CONNECTION_LOST, () => {
        dispatch({
          bluetoothConfig: {
            ...state.bluetoothConfig,
            name: '',
            boundAddress: ''
          }
        })
        // setName('');
        // setBoundAddress('');
      });
    } else if (Platform.OS === 'android') {
      DeviceEventEmitter.addListener(BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED, rsp => {
        deviceAlreadPaired(rsp);
      });
      DeviceEventEmitter.addListener(BluetoothManager.EVENT_DEVICE_FOUND, rsp => {
        deviceFoundEvent(rsp);
      });
      DeviceEventEmitter.addListener(BluetoothManager.EVENT_CONNECTION_LOST, () => {
        dispatch({
          bluetoothConfig: {
            ...state.bluetoothConfig,
            name: '',
            boundAddress: ''
          }
        })
        // setName('');
        // setBoundAddress('');
      });
      DeviceEventEmitter.addListener(BluetoothManager.EVENT_BLUETOOTH_NOT_SUPPORT, () => {
        ToastAndroid.show('Device Not Support Bluetooth !', ToastAndroid.LONG);
      });
    }
    if (pairedDevices.length < 1) {
      scan();
    }
  }, [boundAddress, deviceAlreadPaired, deviceFoundEvent, pairedDevices, scan]);


  return {
    saveHost,
    changeHostname,
    hookHostnameForm,
    getDataProducts,
    connect,
    unPair,
    scanBluetoothDevice,

    state,
    dispatch,
  };
};
