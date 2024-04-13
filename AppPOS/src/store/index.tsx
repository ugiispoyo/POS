import {useReducer} from 'react';
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
    default:
      return state;
  }
};

const initialState: T_State = {
  hasHostname: false,
  hostname: '',
  isLoading: false,
};

export function store() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch,
  };
}
