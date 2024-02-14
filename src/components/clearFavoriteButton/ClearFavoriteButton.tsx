import { useDispatch } from "react-redux";
import { clearFavoriteDrivers } from "../../feature/favoriteDriverSlice";
import { clearFavoriteTeams } from "../../feature/favoriteTeamSlice";

const ClearFavoriteButton = () => {
  const dispatch = useDispatch();

  const clearFavoriteDriver = () => {
    dispatch(clearFavoriteDrivers());
  };

  const clearFavoriteTeam = () => {
    dispatch(clearFavoriteTeams());
  };

  const handleClick = () => {
    clearFavoriteDriver();
    clearFavoriteTeam();
  };

  return (
    <button type="button" onClick={handleClick} style={{ width: "100%" }}>
      Limpar lista de favoritos
    </button>
  );
};

export default ClearFavoriteButton;
