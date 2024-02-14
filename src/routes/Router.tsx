import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drivers from "../pages/drivers/Drivers";
import NotFound from "../pages/notFound/NotFound";

import LayoutDefault from "../layouts/LayoutDefault";
import Favorites from "../pages/favorites/Favorites";
import Teams from "../pages/teams/Teams";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Drivers />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
