import React, {createContext, useContext} from 'react';

import {useLogic} from './hook';
import {T_ProductListCTX, T_ProductListProvider} from './types';

export const ProductListCTX = createContext<T_ProductListCTX | null>(null);

export const useProps = (): T_ProductListCTX | null => {
  const data = useContext(ProductListCTX);
  return data;
};

export const ProductListProvider = ({children}: T_ProductListProvider) => {
  const logic = useLogic();

  return (
    <ProductListCTX.Provider value={logic}>{children}</ProductListCTX.Provider>
  );
};
