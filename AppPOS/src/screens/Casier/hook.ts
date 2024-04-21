import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useState} from 'react';

import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';

export const useLogic = () => {
  const {state, dispatch} = useGlobalProps() as T_GlobalContextCTX;
  const [offsetY, setOffsetY] = useState<number>(0);

  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setOffsetY(event.nativeEvent.contentOffset.y);
  };

  return {
    scrollHandler,
    offsetY,
  };
};
