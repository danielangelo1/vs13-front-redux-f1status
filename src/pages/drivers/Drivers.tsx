import { useEffect, useState } from "react";
import DriverCard from "../../components/driverCard/DriverCard";
import { Driver } from "../../types/Driver";
import useDrivers from "../../hooks/useDrivers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../../feature/hooks/Hooks";
import "./Home.css";

const Drivers = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const season = useAppSelector((state) => state.season.season);
  const { getDrivers } = useDrivers();

  useEffect(() => {
    async function fetchDrivers() {
      const response = await getDrivers(season);
      setDrivers(response);
    }
    fetchDrivers();
  }, [season]);

  return (
    <>
      <ToastContainer />
      <section>
        <p>
          {" "}
          Com o F1 Status você pode acompanhar a classificação dos pilotos e
          equipes da Fórmula 1.
        </p>

        <p>
          Selecione o ano que deseja acompanhar a classificação dos pilotos e
          equipes.
        </p>
        <p>
          Você pode adicionar seus pilotos favoritos clicando no botão com a
          bandeira quadriculada.
        </p>
      </section>
      <DriverCard drivers={drivers} />
    </>
  );
};

export default Drivers;
