export type T_State = {
  isLoading: boolean;
  hasHostname: boolean;
  hostname: string /* loading for first open app */;
  loading: {
    /* loading for action each module */ isLoading: boolean;
    module: string;
  };
  ProductList: T_ScreenProductList;
  Casier: T_ScreenCasier;
  Products: Array<T_ListProducts> | [];
};

export type T_Action = {
  type?: T_TypeAction;
  value?: any;
} & Partial<T_State>;

export type T_ReturnStore = {
  state: T_State;
  dispatch: React.Dispatch<T_Action>;
};

export type T_TypeAction =
  | 'SET_HOSTNAME'
  | 'REMOVE_HOSTNAME'
  | 'SET_ACTION_PRODUCT_LIST'
  | 'SET_DETAIL_PRODUCT'
  | 'ADD_TO_CART';

/* State screen of Product List */
export type T_ScreenProductList = {
  action: {
    hasAction: boolean;
    id: string;
  };
};

/* State screen of Product List */
export type T_ScreenCasier = {
  detailProduct: T_ListProducts | null;
  cart: T_Cart;
};

export type T_Cart = {
  items: Array<T_CartItems> | [];
  totalItems: number;
  totalOriginalAmount: number;
  totalFixAmount: number; /* if any discount */
};

export type T_CartItems = T_ListProducts & {
  total: number;
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
