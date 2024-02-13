import { api, config } from "./api";

const enum Endpoints {
  geral = "/seasons",
}

export const getSeasonsService = async () => {
  try {
    const response = await api.get(`${Endpoints.geral}`, config());
    const data = response.data;
    return data.response;
  } catch (error) {
    return { message: "Erro na Api" };
  }
};
