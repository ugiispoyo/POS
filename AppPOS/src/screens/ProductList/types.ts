export type T_ProductListCTX = {
  ListProducts: Array<T_ListProducts>;
};

export type T_ProductListProvider = {
  children: JSX.Element | React.ReactNode;
};

export type T_ListProducts = {
  id: string;
  name: string;
  description: string;
  image: string;
  isDiscount: boolean;
  price: number;
  priceAfterDiscount: number;
  type: 'MINUMAN' | 'MAKANAN';
  stock: number;
};
