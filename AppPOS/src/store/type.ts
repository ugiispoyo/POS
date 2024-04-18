import {T_ListProducts} from '@screens/Casier/types';

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
  cart: T_ListCart;
};

export type T_ListCart = Array<T_Cart> | [];

export type T_Cart = T_ListProducts & {
  total: number;
};
