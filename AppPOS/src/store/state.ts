import {T_State} from './type';

const initialState: T_State = {
  hasHostname: false,
  hostname: '',
  isLoading: false,
  ProductList: {
    action: {
      hasAction: false,
      id: '',
    },
  },
};

export default initialState;
