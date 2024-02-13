import { api, config } from "./api";

const enum Endpoints {
  geral = "/drivers",
}

export const getDriversService = async (season: number) => {
  try {
    const response = await api.get(
      `${Endpoints.geral}?season=${season}`,
      config(),
    );
    const data = response.data;
    return data.response;
  } catch (error) {
    return { message: "Erro na Api" };
  }
};
