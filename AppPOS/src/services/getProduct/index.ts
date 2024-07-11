import { getStorage } from "@utils/storage";
import { CustomError } from "@services/error";

import { localKeys } from "@constants/index";

import { T_ConfigServices, T_ErrorServices } from "../types";
import { T_ResponseListProducts } from "./types";

export default async function listProducts(
  config?: T_ConfigServices
): Promise<Partial<T_ResponseListProducts> & T_ErrorServices> {
  try {
    const params =
      typeof config?.init?.params !== "undefined"
        ? `?${new URLSearchParams(config?.init?.params).toString()}`
        : "";

    const host = await getStorage(localKeys.HOSTNAME);

    const res = await fetch(
      `${host.hostname}/api/products`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          ...config?.init?.headers,
        },
        ...config?.init,
      }
    );

    // Check if the response is not OK
    if (!res.ok) {
      throw new CustomError(`${res.statusText}`, res.status);
    }

    const data = await res.json();

    return { ...data, status: res.status };
  } catch (e) {
    // Handle the error
    return {
      message: (e as Error).message,
      status: (e as any).status_code,
    };
  }
}