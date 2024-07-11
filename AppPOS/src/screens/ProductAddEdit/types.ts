import { T_State } from '@store/types';
import {UseFormReturn} from 'react-hook-form';

export type T_ProductAddEditCTX = {
  onSave: (data: T_FieldFormProduct) => Promise<void>;
  isDiscount: boolean;
  type: 'MINUMAN' | 'MAKANAN';
  isFood: string;

  hookForm: UseFormReturn<T_FieldFormProduct, any, undefined>;
} & T_State;

export type T_ProductAddEditProvider = {
  children: JSX.Element | React.ReactNode;
};

export type T_FieldFormProduct = {
  name: string;
  description: string;
  image: any;
  isDiscount: boolean;
  price: string;
  priceAfterDiscount: string;
  type: 'MINUMAN' | 'MAKANAN';
  stock: string;
};
