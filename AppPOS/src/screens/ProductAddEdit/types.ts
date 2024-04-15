import {UseFormReturn} from 'react-hook-form';

export type T_ProductAddEditCTX = {
  onSave: (data: T_FieldFormProduct) => Promise<void>;

  hookForm: UseFormReturn<T_FieldFormProduct, any, undefined>;
};

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
