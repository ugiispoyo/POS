import {useEffect, useState} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';

export const useLogic = () => {
  const {getDataProducts, state, dispatch} = useGlobalProps() as T_GlobalContextCTX;
  const [offsetY, setOffsetY] = useState<number>(0);

  useEffect(() => {
    getDataProducts();
  }, []);

  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setOffsetY(event.nativeEvent.contentOffset.y);
  };

  return {
    ...state,
    dispatch,
    scrollHandler,
    offsetY,
  };
};
