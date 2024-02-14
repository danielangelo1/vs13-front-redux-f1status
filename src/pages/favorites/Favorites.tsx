import { useAppSelector } from "../../feature/hooks/Hooks";
import DriverCard from "../../components/driverCard/DriverCard";
import { ToastContainer } from "react-toastify";
import TeamsCard from "../../components/teamsCard/TeamsCard";
import "./Favorites.css";
import ClearFavoriteButton from "../../components/clearFavoriteButton/ClearFavoriteButton";

const Favorites = () => {
  const drivers = useAppSelector(
    (state) => state.favoriteDriver.favoriteDrivers,
  );
  const teams = useAppSelector((state) => state.favoriteTeam.favoriteTeams);

  return (
    <>
      <ToastContainer />
      <main>
        <section>
          {drivers.length > 0 && <ClearFavoriteButton />}

          <h2>Pilotos Favoritos</h2>

          {drivers.length > 0 ? (
            <DriverCard drivers={drivers} isFavorite={true} />
          ) : (
            <p>Nenhum piloto favorito, adicione pilotos!</p>
          )}
        </section>

        <section>
          <h2>Equipes Favoritas</h2>
          {teams.length > 0 ? (
            <TeamsCard teams={teams} isFavorite={true} />
          ) : (
            <p>Nenhuma equipe favorita, adicione equipes!</p>
          )}
        </section>
      </main>
    </>
  );
};

export default Favorites;
