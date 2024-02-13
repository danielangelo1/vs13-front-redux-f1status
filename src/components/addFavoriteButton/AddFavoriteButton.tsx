import { FlagCheckered } from "@phosphor-icons/react";
import { Driver } from "../../types/Driver";
import "./AddFavoriteButton.module.css";
import { useDispatch } from "react-redux";
import { addFavoriteDriver } from "../../feature/favoriteDriverSlice";
import { toast } from "react-toastify";

interface AddFavoriteButtonProps {
  driver: Driver;
}

const AddFavoriteButton = ({ driver }: AddFavoriteButtonProps) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavoriteDriver(driver));
    toast.success("Piloto adicionado aos favoritos", {
      autoClose: 300,
    });
  };
  return (
    <button type="button" onClick={handleAddFavorite}>
      Adicionar aos favoritos <FlagCheckered />
    </button>
  );
};

export default AddFavoriteButton;
