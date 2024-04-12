import {T_Action, T_State} from '@storage/type';

export type T_GlobalContextCTX = {
  host: string;
  setHost: React.Dispatch<React.SetStateAction<string>>;
  saveHost: () => Promise<void>;
  changeHostname: () => Promise<void>;
  state: T_State;
  dispatch: React.Dispatch<T_Action>;
};

export type T_GlobalContextProvider = {
  children: JSX.Element | React.ReactNode;
};
