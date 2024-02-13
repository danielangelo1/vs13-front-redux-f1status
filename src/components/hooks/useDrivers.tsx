import { getDriversService } from "../../services/DriversService";

export default function useDrivers() {
  const getDrivers = async (season: number) => {
    const response = await getDriversService(season);

    if (response.message) {
      return { message: response.message };
    }
    return response;
  };

  return {
    getDrivers,
  };
}
