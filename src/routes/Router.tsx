import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";

import LayoutDefault from "../layouts/LayoutDefault";
import FavoriteDrivers from "../pages/favoriteDrivers/FavoriteDrivers";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/favoriteDriver" element={<FavoriteDrivers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
