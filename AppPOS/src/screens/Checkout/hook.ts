import {useForm} from 'react-hook-form';

import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';

import {T_FieldCheckout} from './types';

const fieldCheckout: T_FieldCheckout = {
  nominal: 0,
};

export const useLogic = () => {
  const {state} = useGlobalProps() as T_GlobalContextCTX;
  const {Casier} = state;

  const hookForm = useForm({
    defaultValues: fieldCheckout,
  });

  const onCheckout = async (data: T_FieldCheckout) => {
    console.log(data);
  };

  return {hookForm, onCheckout};
};
