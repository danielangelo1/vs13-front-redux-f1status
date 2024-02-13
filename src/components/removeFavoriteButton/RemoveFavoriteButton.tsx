import { useDispatch } from "react-redux";
import { Driver } from "../../types/Driver";
import { removeFavoriteDriver } from "../../feature/favoriteDriverSlice";
import { toast } from "react-toastify";

interface RemoveFavoriteButtonProps {
  driver: Driver;
}

const RemoveFavoriteButton = ({ driver }: RemoveFavoriteButtonProps) => {
  const dispatch = useDispatch();

  const handleRemoveFavorite = () => {
    dispatch(removeFavoriteDriver(driver));
    toast.error("Piloto removido dos favoritos", {
      autoClose: 300,
    });
  };
  return (
    <button type="button" onClick={handleRemoveFavorite}>
      Remover dos favoritos
    </button>
  );
};

export default RemoveFavoriteButton;
