import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";

import LayoutDefault from "../layouts/LayoutDefault";
import FavoriteDrivers from "../pages/favoriteDrivers/FavoriteDrivers";
import Teams from "../pages/teams/Teams";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/favoriteDriver" element={<FavoriteDrivers />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
