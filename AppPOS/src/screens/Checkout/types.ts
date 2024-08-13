import React from 'react';
import {UseFormReturn} from 'react-hook-form';

export type T_CheckoutCTX = {
  hookForm: UseFormReturn<T_FieldCheckout, any, undefined>;
};

export type T_CheckoutProvider = {
  children: JSX.Element | React.ReactNode;
};

export type T_FieldCheckout = {
  nominal: number;
};
