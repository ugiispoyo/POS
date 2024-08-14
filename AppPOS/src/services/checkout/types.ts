import {T_Cart} from '@store/types';

export type T_ResponseCheckout = {
  message: string;
  checkout: {
    id: string;
    updated_at: string;
    created_at: string;
  } & T_Cart;
};
