import "./DriverCard.css";
import { Driver } from "../types/Driver";
import AddFavoriteButton from "../addFavoriteButton/AddFavoriteButton";
import RemoveFavoriteButton from "../removeFavoriteButton/RemoveFavoriteButton";

interface DriverCardProps {
  drivers: Driver[];
  isFavorite?: boolean;
}

const DriverCard = ({ drivers, isFavorite }: DriverCardProps) => {
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
            {!isFavorite && <AddFavoriteButton driver={driver} />}
            {isFavorite && <RemoveFavoriteButton driver={driver} />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DriverCard;
