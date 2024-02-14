import { FlagCheckered } from "@phosphor-icons/react";
import { Driver } from "../../types/Driver";
import "./AddFavoriteButton.module.css";
import { useDispatch } from "react-redux";
import { addFavoriteDriver } from "../../feature/favoriteDriverSlice";
import { toast } from "react-toastify";
import { Team } from "../../types/Team";
import { addFavoriteTeam } from "../../feature/favoriteTeamSlice";

interface AddFavoriteButtonProps {
  driver?: Driver;
  team?: Team;
}

const AddFavoriteButton = ({ driver, team }: AddFavoriteButtonProps) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    if (driver) {
      dispatch(addFavoriteDriver(driver));
      toast.success(`Piloto ${driver.driver.name} adicionado aos favoritos`, {
        autoClose: 300,
      });
    } else if (team) {
      dispatch(addFavoriteTeam(team));
      toast.success(`Equipe ${team.team.name} adicionado aos favoritos`, {
        autoClose: 300,
      });
    }
  };

  const buttonText = driver
    ? "Adicionar piloto aos favoritos"
    : "Adicionar equipe aos favoritos";

  return (
    <button type="button" onClick={handleAddFavorite}>
      {buttonText} <FlagCheckered />
    </button>
  );
};

export default AddFavoriteButton;
