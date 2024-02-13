import { Team } from "../../types/Team";
import "./TeamsCard.css";

interface TeamsCardProps {
  teams: Team[];
}

const TeamsCard = ({ teams }: TeamsCardProps) => {
  return (
    <>
      <ul className="teams-container">
        {teams.map((team) => (
          <li key={team.team.id} className="team-card">
            <div className="team-position">{team.position}</div>
            <div className="team-logo">
              <img src={team.team.logo} alt={team.team.name} />
            </div>
            <div className="team-name">{team.team.name}</div>
            <div className="team-points">{team.points} pontos</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeamsCard;
