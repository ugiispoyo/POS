import {T_Action, T_Cart, T_CartItems, T_State} from './types';

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

function addToCart(prev: T_Cart, product: T_CartItems): T_Cart {
  let listItems = prev.items;
  let updateProduct = {...product, total: 1};
  if (listItems.length === 0) {
    listItems = [updateProduct];
    updateProduct.isDiscount;
    return {
      totalItems: 1,
      totalOriginalAmount: updateProduct.price,
      items: listItems,
      totalFixAmount: updateProduct.isDiscount
        ? updateProduct.priceAfterDiscount
        : updateProduct.price,
    };
  } else {
    let updateCart = listItems;
    let totalItems = 0;
    let totalFixAmount = 0;
    let totalOriginalAmount = 0;

    const checkCart = updateCart.filter(item => item.id === product.id);
    if (checkCart.length !== 0) {
      for (var i in updateCart) {
        if (updateCart[i].id == updateProduct.id) {
          updateCart[i].total = updateCart[i].total + 1;
          break;
        }
      }
    } else {
      updateCart = [...listItems, updateProduct];
    }

    for (let i in updateCart) {
      totalOriginalAmount += updateCart[i].price * updateCart[i].total;
      totalItems += updateCart[i].total;
      totalFixAmount += updateCart[i].isDiscount
        ? updateCart[i].priceAfterDiscount * updateCart[i].total
        : updateCart[i].price * updateCart[i].total;
    }

    return {
      totalFixAmount,
      totalOriginalAmount,
      totalItems,
      items: updateCart,
    };
  }
}

export default reducer;
