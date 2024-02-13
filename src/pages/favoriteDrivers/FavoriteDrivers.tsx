import { useAppSelector } from "../../feature/hooks/Hooks";
import DriverCard from "../../components/driverCard/DriverCard";
import { ToastContainer } from "react-toastify";

const FavoriteDrivers = () => {
  const drivers = useAppSelector(
    (state) => state.favoriteDriver.favoriteDrivers,
  );
  return (
    <>
      <ToastContainer />
      {drivers.length > 0 ? (
        <DriverCard drivers={drivers} isFavorite={true} />
      ) : (
        <p>Nenhum piloto favorito, adicione pilotos!</p>
      )}
    </>
  );
};

export default FavoriteDrivers;
