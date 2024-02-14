import { useDispatch } from "react-redux";
import { Driver } from "../../types/Driver";
import { removeFavoriteDriver } from "../../feature/favoriteDriverSlice";
import { Team } from "../../types/Team";
import { removeFavoriteTeam } from "../../feature/favoriteTeamSlice";

interface RemoveFavoriteButtonProps {
  driver?: Driver;
  team?: Team;
}

const RemoveFavoriteButton = ({ driver, team }: RemoveFavoriteButtonProps) => {
  const dispatch = useDispatch();

  const removeDriver = (driver: Driver) => {
    dispatch(removeFavoriteDriver(driver));
  };

  const removeTeam = (team: Team) => {
    dispatch(removeFavoriteTeam(team));
  };

  const handleRemoveFavorite = () => {
    if (driver) {
      removeDriver(driver);
    } else if (team) {
      removeTeam(team);
    }
  };

  return (
    <button type="button" onClick={handleRemoveFavorite}>
      Remover dos favoritos
    </button>
  );
};

export default RemoveFavoriteButton;
