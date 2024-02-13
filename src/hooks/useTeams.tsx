import { getTeamsService } from "../services/TeamsService";

export default function useTeams() {
  const getTeams = async (season: number) => {
    const response = await getTeamsService(season);

    if (response.message) {
      return { message: response.message };
    }

    return response;
  };

  return {
    getTeams,
  };
}
