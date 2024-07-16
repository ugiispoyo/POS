import React, {createContext, useContext} from 'react';

import {useLogic} from './hook';
import {T_ConnectToPrintCTX, T_ConnectToPrintProvider} from './types';

export const ConnectToPrintCTX = createContext<T_ConnectToPrintCTX | null>(null);

export const useProps = (): T_ConnectToPrintCTX | null => {
  const data = useContext(ConnectToPrintCTX);
  return data;
};

export const ConnectToPrintProvider = ({children}: T_ConnectToPrintProvider) => {
  const logic = useLogic();

  return <ConnectToPrintCTX.Provider value={logic}>{children}</ConnectToPrintCTX.Provider>;
};
