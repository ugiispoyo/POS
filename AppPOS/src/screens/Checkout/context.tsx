import React, {createContext, useContext} from 'react';

import {useLogic} from './hook';
import {T_CheckoutCTX, T_CheckoutProvider} from './types';

export const CheckoutCTX = createContext<T_CheckoutCTX | null>(null);

export const useProps = (): T_CheckoutCTX | null => {
  const data = useContext(CheckoutCTX);
  return data;
};

export const CheckoutProvider = ({children}: T_CheckoutProvider) => {
  const logic = useLogic();

  return <CheckoutCTX.Provider value={logic}>{children}</CheckoutCTX.Provider>;
};
