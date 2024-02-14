import { FlagCheckered } from "@phosphor-icons/react";
import { Driver } from "../../types/Driver";
import "./AddFavoriteButton.module.css";
import { useDispatch } from "react-redux";
import { addFavoriteDriver } from "../../feature/favoriteDriverSlice";

import { Team } from "../../types/Team";
import { addFavoriteTeam } from "../../feature/favoriteTeamSlice";

interface AddFavoriteButtonProps {
  driver?: Driver;
  team?: Team;
}

const AddFavoriteButton = ({ driver, team }: AddFavoriteButtonProps) => {
  const dispatch = useDispatch();

  const addDriver = (driver: Driver) => {
    dispatch(addFavoriteDriver(driver));
  };

  const addTeam = (team: Team) => {
    dispatch(addFavoriteTeam(team));
  };

  const handleAddFavorite = () => {
    if (driver) {
      addDriver(driver);
    } else if (team) {
      addTeam(team);
    }
  };

  return (
    <button type="button" onClick={handleAddFavorite}>
      Adicionar aos favoritos <FlagCheckered />
    </button>
  );
};

export default AddFavoriteButton;
