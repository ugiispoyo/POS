import {T_Action, T_State} from './type';

const reducer = (state: T_State, action: T_Action): T_State => {
  const {type, value} = action;
  const updateState = action as T_State;

  if (typeof type === 'undefined') {
    return {...state, ...updateState};
  }

  switch (type) {
    case 'SET_HOSTNAME':
      return {
        ...state,
        hasHostname: true,
        hostname: typeof value === 'number' ? value.toString() : value,
        isLoading: false,
      };
    case 'REMOVE_HOSTNAME':
      return {
        ...state,
        hasHostname: false,
        hostname: '',
        isLoading: false,
      };
    case 'SET_ACTION_PRODUCT_LIST':
      return {
        ...state,
        ProductList: {
          ...state.ProductList,
          action: value,
        },
      };
    case 'SET_DETAIL_PRODUCT':
      return {
        ...state,
        Casier: {
          ...state.Casier,
          detailProduct: value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
