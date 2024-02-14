import { createSlice } from "@reduxjs/toolkit";
import { Driver } from "../types/Driver";
import { toast } from "react-toastify";

interface FavoriteDriverState {
  favoriteDrivers: Driver[];
}

const initialState: FavoriteDriverState = {
  favoriteDrivers: [],
};

const favoriteDriverSlice = createSlice({
  name: "favoriteDriver",
  initialState,
  reducers: {
    addFavoriteDriver(state, action) {
      if (
        state.favoriteDrivers.some(
          (driver) => driver.driver.id === action.payload.driver.id,
        )
      ) {
        toast.error(
          `Piloto ${action.payload.driver.name} já está nos favoritos`,
          {
            autoClose: 300,
          },
        );
        return;
      }
      state.favoriteDrivers.push(action.payload);
      toast.success(
        `Piloto ${action.payload.driver.name} adicionado aos favoritos`,
        {
          autoClose: 300,
        },
      );
    },
    removeFavoriteDriver(state, action) {
      state.favoriteDrivers = state.favoriteDrivers.filter(
        (driver) => driver.driver.id !== action.payload.driver.id,
      );
      toast.success(
        `Piloto ${action.payload.driver.name} removido dos favoritos`,
        {
          autoClose: 300,
        },
      );
    },
    clearFavoriteDrivers(state) {
      state.favoriteDrivers = [];
    },
  },
});

export const { addFavoriteDriver, removeFavoriteDriver, clearFavoriteDrivers } =
  favoriteDriverSlice.actions;

export default favoriteDriverSlice.reducer;
