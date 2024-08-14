import {useEffect} from 'react';

import {useGlobalProps} from '@context/context';

import {T_GlobalContextCTX} from '@context/types';

export const useLogic = () => {
  const {state, dispatch, getDataProducts} =
    useGlobalProps() as T_GlobalContextCTX;

  useEffect(() => {
    dispatch({ProductList: {action: {hasAction: false, id: ''}}});
    if (state.Products.length === 0) {
      getDataProducts();
    }
  }, []);

  return {
    ...state,
    dispatch,
    getDataProducts,
  };
};
