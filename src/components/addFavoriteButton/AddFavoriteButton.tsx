import { FlagCheckered } from "@phosphor-icons/react";
import { Driver } from "../types/Driver";
import "./AddFavoriteButton.module.css";

interface AddFavoriteButtonProps {
  driver: Driver;
}

const AddFavoriteButton = ({ driver }: AddFavoriteButtonProps) => {
  return (
    <button
      type="button"
      onClick={() =>
        console.log(`Adicionado ${driver.driver.name} aos favoritos`)
      }
    >
      Adicionar aos favoritos <FlagCheckered />
    </button>
  );
};

export default AddFavoriteButton;
