import {UseFormReturn} from 'react-hook-form';
import {T_Action, T_State} from '@store/types';

export type T_GlobalContextCTX = {
  saveHost: (data: T_FieldHostname) => Promise<void>;
  changeHostname: () => Promise<void>;
  hookHostnameForm: UseFormReturn<T_FieldHostname, any, undefined>;
  getDataProducts: () => Promise<void>;

  state: T_State;
  dispatch: React.Dispatch<T_Action>;
};

export type T_GlobalContextProvider = {
  children: JSX.Element | React.ReactNode;
};

export type T_FieldHostname = {
  hostname: string;
};
