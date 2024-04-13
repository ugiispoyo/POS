import {useReducer} from 'react';

import initialState from './state';
import reducer from './reducer';
import {T_ReturnStore} from './type';

export function store(): T_ReturnStore {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch,
  };
}
