import React, {createContext, useContext} from 'react';

import {useLogic} from './hook';
import {T_CasierCTX, T_CasierProvider} from './types';

export const CasierCTX = createContext<T_CasierCTX | null>(null);

export const useProps = (): T_CasierCTX | null => {
  const data = useContext(CasierCTX);
  return data;
};

export const CasierProvider = ({children}: T_CasierProvider) => {
  const logic = useLogic(); 

  return <CasierCTX.Provider value={logic}>{children}</CasierCTX.Provider>;
};
