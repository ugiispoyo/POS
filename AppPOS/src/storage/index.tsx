import {useReducer} from 'react';
import {T_Action, T_State} from './type';

const reducer = (state: T_State, action: T_Action): T_State => {
  const {type, value} = action;
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
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: value,
      };
    default:
      return state;
  }
};

export function store() {
  const _state: T_State = {
    hasHostname: false,
    hostname: '',
    isLoading: false,
  };

  const [state, dispatch] = useReducer(reducer, _state);

  return {
    state,
    dispatch,
  };
}
