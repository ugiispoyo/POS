import {T_State} from '@store/types';

export type T_ConnectToPrintCTX = {
  connect: (row: any) => void;
  unPair: (address: any) => void;
  scanBluetoothDevice: () => Promise<void>
} & T_State;

export type T_ConnectToPrintProvider = {
  children: JSX.Element | React.ReactNode;
};
