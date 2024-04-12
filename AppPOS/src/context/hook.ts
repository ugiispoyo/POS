import {useEffect, useState} from 'react';
import {
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';

import {getStorage, removeStorage, setStorage} from '@utils/storage';
import {store} from '@storage/index';

export const useLogic = () => {
  const navigation = useNavigation<any>();
  const navigationRef =
    createNavigationContainerRef<ReactNavigation.RootParamList>();
  const {dispatch, state} = store();

  const [host, setHost] = useState<string>('');

  useEffect(() => {
    dispatch({type: 'IS_LOADING', value: true});
    checkHostName();
  }, []);

  const checkHostName = async () => {
    const host = await getStorage('hostname');
    if (host) {
      dispatch({type: 'SET_HOSTNAME', value: host.hostname});
    } else {
      dispatch({type: 'IS_LOADING', value: false});
    }
  };

  const saveHost = async () => {
    dispatch({type: 'IS_LOADING', value: true});
    await setStorage('hostname', {hostname: host});
    setTimeout(async () => {
      const check = await getStorage('hostname');
      if (!check) {
        dispatch({type: 'IS_LOADING', value: true});
      }
      dispatch({type: 'SET_HOSTNAME', value: check.hostname});
    }, 500);
  };

  const changeHostname = async () => {
    dispatch({type: 'IS_LOADING', value: true});
    await removeStorage('hostname');
    setTimeout(async () => {
      dispatch({type: 'REMOVE_HOSTNAME'});
      if (navigationRef.isReady()) {
        navigation.navigate('Host');
      }
    }, 500);
  };

  return {
    host,
    setHost,
    saveHost,
    state,
    dispatch,
    changeHostname,
  };
};
