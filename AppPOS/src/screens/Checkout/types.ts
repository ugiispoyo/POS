import React from 'react';
import {UseFormReturn} from 'react-hook-form';

export type T_CheckoutCTX = {
  hookForm: UseFormReturn<T_FieldCheckout, any, undefined>;
  onCheckout: (data: T_FieldCheckout) => Promise<void>;
  onPrint: () => Promise<void>;
};

export type T_CheckoutProvider = {
  children: JSX.Element | React.ReactNode;
};

export type T_FieldCheckout = {
  nominal: number;
  address: string;
};
