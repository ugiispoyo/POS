import { T_ListProducts } from "@store/types";

export type T_ProductListCTX = {
  ListProducts: Array<T_ListProducts>;
};

export type T_ProductListProvider = {
  children: JSX.Element | React.ReactNode;
};