import {T_Action, T_State} from '@store/types';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

export type T_CasierCTX = {
  scrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  offsetY: number;
  dispatch: React.Dispatch<T_Action>;
} & T_State;

export type T_CasierProvider = {
  children: JSX.Element | React.ReactNode;
};
