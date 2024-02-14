import { useEffect, useState } from "react";
import DriverCard from "../../components/driverCard/DriverCard";
import { Driver } from "../../types/Driver";
import useDrivers from "../../hooks/useDrivers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../../feature/hooks/Hooks";

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

      <DriverCard drivers={drivers} />
    </>
  );
};

export default Drivers;
