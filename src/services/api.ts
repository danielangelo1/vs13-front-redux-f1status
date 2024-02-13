import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: "https://v1.formula-1.api-sports.io/rankings",
});

export function config(): AxiosRequestConfig {
  return {
    headers: {
      "x-apisports-key": "e8ca98fa671ffd76d2181f3c53e9481e",
    },
  };
}
