import { Team } from "../types/Team";
import "./TeamsCard.css";

interface TeamsCardProps {
  teams: Team[];
}

const TeamsCard = ({ teams }: TeamsCardProps) => {
  return (
    <>
      <ul className="teams-container">
        {teams.map((team) => (
          <li key={team.id} className="team-card">
            <img src={team.logo} alt="Logo da equipe" className="team-logo" />
            <p>{team.name}</p>
            <p>{team.base}</p>
            <p>Entrada na F1: {team.first_team_entry}</p>
            <p>Campeonatos mundiais: {team.world_championships}</p>
            <p>Pole positions: {team.pole_positions}</p>
            <p>Voltas mais rápida: {team.fastest_laps}</p>
            <p>Diretor: {team.director}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeamsCard;
