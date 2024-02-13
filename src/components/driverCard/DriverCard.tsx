import { useEffect, useState } from "react";
import "./DriverCard.css";
import useDrivers from "../hooks/useDrivers";
import { Driver } from "../types/Driver";
import AddFavoriteButton from "../addFavoriteButton/AddFavoriteButton";
import useSeasons from "../hooks/useSeasons";

const DriverCard = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const { getDrivers } = useDrivers();

  useEffect(() => {
    async function fetchDrivers() {
      const response = await getDrivers(2023);
      setDrivers(response);
    }
    fetchDrivers();
  }, []);

  return (
    <>
      <ul className="driver-container">
        {drivers.map((driver) => (
          <li key={driver.driver.id} className="driver-card">
            <span>Posição: {driver.position}</span>
            <img
              src={driver.driver.image}
              alt="Foto do piloto"
              className="driver-photo"
            />
            <p>
              {driver.driver.name} <span>{driver.driver.number}</span>
            </p>
            <p>{driver.team.name}</p>
            <AddFavoriteButton driver={driver} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DriverCard;
