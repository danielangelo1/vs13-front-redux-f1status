import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drivers from "../pages/drivers/Drivers";
import NotFound from "../pages/notFound/NotFound";

import LayoutDefault from "../layouts/LayoutDefault";
import Favorites from "../pages/favorites/Favorites";
import Teams from "../pages/teams/Teams";
import Home from "../pages/home/Home";
import CreateUser from "../pages/createUser/CreateUser";
import Register from "../pages/register/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/home" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
