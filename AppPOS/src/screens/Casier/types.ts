import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

export type T_CasierCTX = {
  scrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  offsetY: number;
};

export type T_CasierProvider = {
  children: JSX.Element | React.ReactNode;
};
