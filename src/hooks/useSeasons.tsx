import { getSeasonsService } from "../services/SeasonsService";

export default function useSeasons() {
  const getSeasons = async () => {
    const response = await getSeasonsService();
    if (response.message) {
      return { message: response.message };
    }
    return response;
  };

  return {
    getSeasons,
  };
}
