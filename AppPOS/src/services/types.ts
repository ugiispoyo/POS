export type T_ErrorServices = {
  message: string;
  status?: number;
};

export type T_ConfigServices = {
  url?: string | URL | Request;
  init?: RequestInit & {
    params?: {
      [key: string]: any;
    };
  };
}