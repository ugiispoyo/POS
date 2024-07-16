import { useEffect } from 'react';
import {
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { localKeys } from '@constants/index';
import { getStorage, removeStorage, setStorage } from '@utils/storage';
import getProducts from '@services/getProduct';

import { store } from '@store/index';
import { T_FieldHostname } from './types';
import { ToastAndroid } from 'react-native';

/* default field hostname React hook */
const fieldHostnameForm: T_FieldHostname = {
  hostname: '',
};

export const useLogic = () => {
  const navigation = useNavigation<any>();
  const navigationRef =
    createNavigationContainerRef<ReactNavigation.RootParamList>();
  const { dispatch, state } = store();

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
      ToastAndroid.showWithGravityAndOffset(
        data?.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      )
      return;
    }

    dispatch({ Products: data.data })
    dispatch({ loading: { isLoading: false, module: "" } })
  }


  return {
    saveHost,
    changeHostname,
    hookHostnameForm,
    getDataProducts,

    state,
    dispatch,
  };
};
