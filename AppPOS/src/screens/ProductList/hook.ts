import { useEffect } from 'react';

import listProducts from '@services/getProduct';

import { useGlobalProps } from '@context/context';

import { T_GlobalContextCTX } from '@context/types';
import { T_ListProducts } from '@store/types';

export const useLogic = () => {

  const { state, dispatch } = useGlobalProps() as T_GlobalContextCTX;

  useEffect(() => {
    getDataProducts();
  }, [])

  const getDataProducts = async () => {
    dispatch({ loading: { isLoading: true, module: "ProductList" } })
    const data = await listProducts({ init: { params: { limit: 50 } } })
    if (typeof data?.data === "undefined") {
      dispatch({ loading: { isLoading: false, module: "" } })
      return;
    }

    dispatch({ Products: data.data })
    dispatch({ loading: { isLoading: false, module: "" } })
  }

  return {
    ...state,
    dispatch
  };
};
