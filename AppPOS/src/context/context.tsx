import React, {createContext, useContext} from 'react';

import {useLogic} from './hook';
import {T_GlobalContextCTX, T_GlobalContextProvider} from './types';

export const GlobalContextCTX = createContext<T_GlobalContextCTX | null>(null);

export const useGlobalProps = (): T_GlobalContextCTX | null => {
  const data = useContext(GlobalContextCTX);
  return data;
};

export const GlobalContextProvider = ({children}: T_GlobalContextProvider) => {
  const logic = useLogic();

  return (
    <GlobalContextCTX.Provider value={logic}>
      {children}
    </GlobalContextCTX.Provider>
  );
};
