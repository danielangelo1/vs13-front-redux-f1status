import React from "react";
import { useAppSelector } from "../../feature/hooks/Hooks";
import DriverCard from "../../components/driverCard/DriverCard";

const FavoriteDrivers = () => {
  const drivers = useAppSelector(
    (state) => state.favoriteDriver.favoriteDrivers,
  );
  return (
    <>
      {drivers.length > 0 ? (
        <DriverCard drivers={drivers} isFavorite={true} />
      ) : (
        <p>Nenhum piloto favorito, adicione pilotos!</p>
      )}
    </>
  );
};

export default FavoriteDrivers;
