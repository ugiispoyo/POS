import {T_State} from './types';

const initialState: T_State = {
  hasHostname: false,
  hostname: '',
  isLoading: false /* loading for first open app */,
  loading: {
    /* loading for action each module */ isLoading: false,
    module: '',
  },
  ProductList: {
    action: {
      hasAction: false,
      id: '',
    },
  },
  Casier: {
    detailProduct: null,
    cart: [],
  },
  Products: [],
};

export default initialState;
