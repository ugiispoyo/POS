import {useForm} from 'react-hook-form';
import {ToastAndroid} from 'react-native';

import checkout from '@services/checkout';

import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';

import {T_FieldCheckout} from './types';

const fieldCheckout: T_FieldCheckout = {
  nominal: 0,
};

export const useLogic = () => {
  const {state, dispatch} = useGlobalProps() as T_GlobalContextCTX;
  const {Casier} = state;

  const hookForm = useForm({
    defaultValues: fieldCheckout,
  });

  const onCheckout = async (data: T_FieldCheckout) => {
    dispatch({loading: {isLoading: true, module: 'CHECKOUT'}});
    const formData = new FormData();
    const Cart = Casier.cart;

    Object.entries(Cart).forEach(([key, value]) => {
      let val: any = value;
      if (key === 'items') {
        val = JSON.stringify(value);
      }

      formData.append(key, val);
    });

    const result = await checkout({init: {body: formData}});
    if (
      ['checkout created successfully'].includes(result.message?.toLowerCase())
    ) {
      dispatch({loading: {isLoading: false, module: ''}});
      dispatch({
        Checkout: {
          ...state.Checkout,
          isModalChange: true,
        },
      });
    } else {
      console.log(result.message)
      ToastAndroid.showWithGravityAndOffset(
        JSON.stringify(JSON.parse(result.message)),
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      dispatch({loading: {isLoading: false, module: ''}});
    }
  };

  return {hookForm, onCheckout};
};
