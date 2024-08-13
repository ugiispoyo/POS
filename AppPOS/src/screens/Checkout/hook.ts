import {useEffect} from 'react';

import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';

export const useLogic = () => {
  const {state} = useGlobalProps() as T_GlobalContextCTX;
  const {Casier} = state;

  useEffect(() => {
    console.log(Casier.cart);
  }, []);

  return {};
};
