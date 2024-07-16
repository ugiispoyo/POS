export type T_State = {
  isLoading: boolean;
  hasHostname: boolean;
  hostname: string /* loading for first open app */;
  loading: {
    /* loading for action each module */ isLoading: boolean;
    module: T_ListModule | "";
  };
  error: string;
  bluetoothConfig: {
    pairedDevices: Array<any>;
    foundDs: Array<any>;
    bleOpend: boolean;
    loading: boolean;
    name: string;
    boundAddress: string;
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
  | 'ADD_TO_CART'
  | 'ADD_OR_MIN_CART';

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
  isDiscount: "1" | "2";
  price: number;
  priceAfterDiscount: number | null;
  type: "makanan" | "minuman";
  stock: number | null;
  created_at: string;
  updated_at: string;
};

export type T_ListModule = "PRODUCT_LIST" | "ADD_UPDATE_PRODUCT"