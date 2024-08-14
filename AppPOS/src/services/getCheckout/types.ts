import {T_Cart} from '@store/types';

export type T_ResponseListCheckout = {
  current_page: number;
  data: Array<
    {
      id: string;
      updated_at: string;
      created_at: string;
    } & T_Cart
  >;
  per_page: number;
  to: number;
  total: number;
};
