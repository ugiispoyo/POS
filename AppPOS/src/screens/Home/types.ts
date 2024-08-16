import {T_Action, T_State} from '@store/types';

export type T_HomeCTX = {
  dispatch: React.Dispatch<T_Action>;
  downloadReport: (type: 'pdf' | 'xlsx') => void;
} & T_State;

export type T_HomeProvider = {
  children: JSX.Element | React.ReactNode;
};
