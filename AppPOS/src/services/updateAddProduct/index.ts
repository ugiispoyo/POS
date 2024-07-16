import { getStorage } from "@utils/storage";
import { CustomError } from "@services/error";

import { localKeys } from "@constants/index";

import { T_ConfigServices, T_ErrorServices } from "../types";
import { T_ResponseProducts } from "./types";

export default async function addUpdateProduct(
  config?: T_ConfigServices
): Promise<Partial<T_ResponseProducts> & T_ErrorServices> {
  try {
    const params =
      typeof config?.init?.params !== "undefined"
        ? `?${new URLSearchParams(config?.init?.params).toString()}`
        : "";

    const host = await getStorage(localKeys.HOSTNAME);
    const endpoint = typeof config?.url !== "undefined" ? config.url : `${host.hostname}/api/products${params}`

    const res = await fetch(
      `${endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-type": "multipart/form-data",
          ...config?.init?.headers,
        },
        ...config?.init,
      }
    );

    // Check if the response is not OK
    if (!res.ok) {
      const resFailed = await res.json();
      throw new CustomError(`${JSON.stringify(resFailed)}`, res.status);
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