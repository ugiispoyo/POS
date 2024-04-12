export type T_State = {
  isLoading: boolean;
  hasHostname: boolean;
  hostname: string;
}
export type T_Action = {
  type: "SET_HOSTNAME" | "REMOVE_HOSTNAME" | "IS_LOADING";
  value?: any;
}