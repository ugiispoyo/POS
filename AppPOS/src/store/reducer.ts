import {T_ListProducts} from '@screens/Casier/types';
import {T_Action, T_Cart, T_ListCart, T_State} from './types';

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
    case 'ADD_TO_CART':
      return {
        ...state,
        Casier: {
          ...state.Casier,
          cart: addToCart(state.Casier.cart, value),
        },
      };
    default:
      return state;
  }
};

function addToCart(prev: T_ListCart, product: T_Cart): T_ListCart {
  let updateProduct = {...product, total: 1};
  if (prev.length === 0) {
    prev = [updateProduct];
    return prev;
  } else {
    let updateCart = prev;
    const checkCart = updateCart.filter(item => item.id === product.id);
    if (checkCart.length !== 0) {
      for (var i in updateCart) {
        if (updateCart[i].id == updateProduct.id) {
          updateCart[i].total = updateCart[i].total + 1;
          break;
        }
      }
    } else {
      updateCart = [...prev, updateProduct];
    }

    return updateCart;
  }
}

export default reducer;
