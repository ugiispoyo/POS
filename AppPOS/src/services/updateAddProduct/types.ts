import { T_ListProducts } from '@store/types';

export type T_ResponseProducts = {
  message: string;
  product: T_ListProducts;
}