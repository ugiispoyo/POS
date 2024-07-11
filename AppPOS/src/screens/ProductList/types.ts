import { T_Action, T_State } from "@store/types";

export type T_ProductListCTX = {
  dispatch: React.Dispatch<T_Action>;
} & T_State;

export type T_ProductListProvider = {
  children: JSX.Element | React.ReactNode;
};