import { Team } from "../../types/Team";
import AddFavoriteButton from "../addFavoriteButton/AddFavoriteButton";
import RemoveFavoriteButton from "../removeFavoriteButton/RemoveFavoriteButton";
import "./TeamsCard.css";

interface TeamsCardProps {
  teams: Team[];
  isFavorite?: boolean;
}

const TeamsCard = ({ teams, isFavorite }: TeamsCardProps) => {
  return (
    <>
      <ul className="teams-container">
        {teams.map((team) => (
          <li key={team.team.id} className="team-card">
            <p className="team-position">Posição: {team.position}</p>
            <div className="team-logo">
              <img src={team.team.logo} alt={team.team.name} />
            </div>
            <p className="team-name">{team.team.name}</p>
            <span className="team-points">{team.points} pontos</span>
            {!isFavorite && <AddFavoriteButton team={team} />}
            {isFavorite && <RemoveFavoriteButton team={team} />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeamsCard;
