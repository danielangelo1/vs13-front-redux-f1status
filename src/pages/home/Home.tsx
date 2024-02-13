import { useEffect, useState } from "react";
import DriverCard from "../../components/driverCard/DriverCard";
import { Driver } from "../../components/types/Driver";
import useDrivers from "../../hooks/useDrivers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const { getDrivers } = useDrivers();

  useEffect(() => {
    async function fetchDrivers() {
      const response = await getDrivers(2023);
      setDrivers(response);
    }
    // fetchDrivers();
  }, []);

  return (
    <>
      <ToastContainer />
      <DriverCard drivers={drivers} />
    </>
  );
};

export default Home;
