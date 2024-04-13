import React, {createContext, useContext} from 'react';

import {useLogic} from './hook';
import {T_ProductAddEditCTX, T_ProductAddEditProvider} from './types';

export const ProductAddEditCTX = createContext<T_ProductAddEditCTX | null>(
  null,
);

export const useProps = (): T_ProductAddEditCTX | null => {
  const data = useContext(ProductAddEditCTX);
  return data;
};

export const ProductAddEditProvider = ({
  children,
}: T_ProductAddEditProvider) => {
  const logic = useLogic();

  return (
    <ProductAddEditCTX.Provider value={logic}>
      {children}
    </ProductAddEditCTX.Provider>
  );
};
