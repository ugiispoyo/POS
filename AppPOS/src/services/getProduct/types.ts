import { T_ListProducts } from '@store/types';

export type T_ResponseListProducts = {
  current_page: number;
  data: [T_ListProducts];
  per_page: number;
  to: number;
  total: number;
} & T_ListProducts