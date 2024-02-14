import { useDispatch } from "react-redux";
import { Driver } from "../../types/Driver";
import { removeFavoriteDriver } from "../../feature/favoriteDriverSlice";
import { toast } from "react-toastify";
import { Team } from "../../types/Team";
import { removeFavoriteTeam } from "../../feature/favoriteTeamSlice";

interface RemoveFavoriteButtonProps {
  driver?: Driver;
  team?: Team;
}

const RemoveFavoriteButton = ({ driver, team }: RemoveFavoriteButtonProps) => {
  const dispatch = useDispatch();

  const handleRemoveFavorite = () => {
    if (driver) {
      dispatch(removeFavoriteDriver(driver));
      toast.error(`Piloto ${driver.driver.name} removido dos favoritos`, {
        autoClose: 300,
      });
    } else if (team) {
      dispatch(removeFavoriteTeam(team));
      toast.error(`Equipe ${team.team.name} removida dos favoritos`, {
        autoClose: 300,
      });
    }
  };

  return (
    <button type="button" onClick={handleRemoveFavorite}>
      Remover dos favoritos
    </button>
  );
};

export default RemoveFavoriteButton;
