export type T_State = {
  isLoading: boolean;
  hasHostname: boolean;
  hostname: string;
  ProductList: T_ScreenProductList;
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
  | 'SET_ACTION_PRODUCT_LIST';

/* State screen of Product List */
export type T_ScreenProductList = {
  action: {
    hasAction: boolean;
    id: string;
  };
};
