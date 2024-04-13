import {useEffect, useState} from 'react';
import {
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import {localKeys} from '@constants/index';
import {getStorage, removeStorage, setStorage} from '@utils/storage';

import {store} from '@store/index';
import {T_FieldHostname} from './types';

/* default field hostname React hook */
const fieldHostnameForm: T_FieldHostname = {
  hostname: '',
};

export const useLogic = () => {
  const navigation = useNavigation<any>();
  const navigationRef =
    createNavigationContainerRef<ReactNavigation.RootParamList>();
  const {dispatch, state} = store();

  const hookHostnameForm = useForm({
    defaultValues: fieldHostnameForm,
  });

  useEffect(() => {
    dispatch({isLoading: true});
    checkHostName();
  }, []);

  const checkHostName = async () => {
    const host = await getStorage(localKeys.HOSTNAME);
    if (host) {
      dispatch({type: 'SET_HOSTNAME', value: host.hostname});
    } else {
      dispatch({isLoading: false});
    }
  };

  const saveHost = async (data: T_FieldHostname) => {
    dispatch({isLoading: true});
    await setStorage(localKeys.HOSTNAME, {hostname: data.hostname});
    setTimeout(async () => {
      const check = await getStorage(localKeys.HOSTNAME);
      if (!check) {
        dispatch({isLoading: false});
      }
      dispatch({type: 'SET_HOSTNAME', value: check.hostname});
    }, 500);
  };

  const changeHostname = async () => {
    dispatch({isLoading: true});
    await removeStorage(localKeys.HOSTNAME);
    setTimeout(async () => {
      dispatch({type: 'REMOVE_HOSTNAME'});
      if (navigationRef.isReady()) {
        navigation.navigate('Host');
      }
    }, 500);
  };

  return {
    saveHost,
    changeHostname,
    hookHostnameForm,

    state,
    dispatch,
  };
};
