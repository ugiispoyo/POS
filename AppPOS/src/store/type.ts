export type T_State = {
  isLoading: boolean;
  hasHostname: boolean;
  hostname: string;
};

export type T_Action = {
  type?: T_TypeAction;
  value?: any;
} & Partial<T_State>;

export type T_TypeAction = 'SET_HOSTNAME' | 'REMOVE_HOSTNAME';
