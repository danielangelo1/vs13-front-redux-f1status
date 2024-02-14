import { useEffect, useState } from "react";
import { Team } from "../../types/Team";
import TeamsCard from "../../components/teamsCard/TeamsCard";
import useTeams from "../../hooks/useTeams";
import { useAppSelector } from "../../feature/hooks/Hooks";
import { ToastContainer } from "react-toastify";

const Teams = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const season = useAppSelector((state) => state.season.season);
  const { getTeams } = useTeams();

  useEffect(() => {
    async function fetchTeams() {
      const response = await getTeams(season);
      setTeams(response);
    }
    fetchTeams();
  }, [season]);
  return (
    <>
      <ToastContainer />
      <TeamsCard teams={teams} />
    </>
  );
};

export default Teams;
