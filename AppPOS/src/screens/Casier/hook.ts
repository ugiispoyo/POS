import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';

export const useLogic = () => {
  const {state, dispatch} = useGlobalProps() as T_GlobalContextCTX;

  return {};
};
